const User = require('../models/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const register = async (req, res, next)=>{
    const {name, email, password} = req.body
    let user;

    // hashed password
    const hashedPassword = bcrypt.hashSync(password)

    try{
        user = new User({
            name,
            email,
            password : hashedPassword
        })
        await user.save();
    }catch(err){
        console.log(err);
    }

    if(!user){
        return res.status(500).json({message: "Unable to add"})
    }
    return res.status(201).json({user})
}

const login = async (req, res, next)=>{
    const {email, password} = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({
            email: email
        })
    }catch(err){
        return new Error(err);
    }

    // check password
    const correctPassword = bcrypt.compare(password, existingUser.password)

    if(!correctPassword){
        return res.status(400).json({message: "Invalid email or password"})
    }
    return res.status(200).json({existingUser})

    // Create access token & cookie

    const token = jwt.sign({
        id: existingUser._id
    },process.env.JWT_SECRET_KEY,{
        expiresIn: "30s"
    })

    res.cookie(String(existingUser._id), token, {
        path: '/',
        expires: new Date(Date.now() + 1000*30),
        httpOnly: true,
        sameSite: 'lax'
    })

    return res.status(200).json({message: "Login successfully",user: existingUser, token})
}

const verifyToken = (req, res, next)=>{
    const cookie = req.headers.cookie;
    const token = cookie.split("=")[1]

    if(!token){
        return res.status(404).json({message: "No token found"})
    }

    jwt.verify(String(token), process.env.JWT_SECRET_KEY, (err, user)=>{
        if(err){
            return res.status(400).json({message: "Invalid token"})
        }

        req.id = user.id
    })
    next();
}

const getUser = async (req, res, next)=>{
    const userId = req.id;
    let user;
    try{
        user = await User.findById(userId, "-password")
    }catch(err){
        return new Error(err)
    }

    if(!user){
        return res.status(404).json({message: "User not found"})
    }
    return res.status(200).json({user})
}

const refreshToken = (req, res, next)=>{
    const cookie = req.headers.cookie;
    const prevToken = cookie.split("=")[1]

    if(!prevToken){
        return res.status(404).json({message: "No token found"})
    }

    jwt.verify(String(prevToken), process.env.JWT_SECRET_KEY, (err, user)=>{
        if(err){
            return res.status(400).json({message: "Authentication fail"})
        }
        // remove cookie
        res.clearCookie(`${user.id}`)
        req.cookies[`${user.id}`] = ""
        // generate new token
        const token = jwt({id: user.id}, process.env.JWT_SECRET_KEY, {expiresIn: "30s"})

        res.cookie(String(user.id), token, {
            path: '/',
            expires: new Date(Date.now()+ 1000*30),
            httpOnly: true,
            sameSite: 'lax'
        })
        req.id = user.id;
        next();
    })    
}

exports.register = register;
exports.login = login;
exports.verifyToken = verifyToken;
exports.getUser = getUser;
exports.refreshToken = refreshToken;