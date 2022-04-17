const Room = require('../models/Room');

const getAllRooms = async(req, res, next)=>{
    let rooms;
    try{
        rooms = await Room.find();
    }catch(err){
        console.log(err);
    }

    if(!rooms){
        return res.status(404).json({message: "Not Found"})
    }

    return res.status(200).json({rooms})
}

const addRoom = async(req, res, next)=>{
    const {title, detail, price, size, capacity} = req.body;
    let room;
    try{
        room = new Room({
            title,
            detail,
            price,
            size,
            capacity
        })
        await room.save();
    }catch(err){
        console.log(err);
    }

    if(!room){
        return res.status(500).json({message: "Unable to add"})
    }
    return res.status(201).json({room})
}

const getById = async(req, res, next)=>{
    const id = req.params.id;
    let room;
    try{
        room = await Room.findById(id);
    }catch(err){
        console.log(err);
    }

    if(!room){
        return res.status(404).json({message: "Not found by this id"})
    }
    return res.status(200).json({room})
}

const updateRoom = async (req, res, next)=>{
    const id = req.params.id;
    const {title, detail, price, size, capacity} = req.body;
    let room;
    try{
        room = await Room.findByIdAndUpdate(id, {
            title,
            detail,
            price,
            size,
            capacity
        })
        room = await room.save()
    }catch(err){
        console.log(err);
    }

    if(!room){
        return res.status(404).json({message: 'Unable to update by this id'})
    }
    return res.status(200).json({room})
}

const deleteRoom = async (req, res, next)=>{
    const id = req.params.id;
    let room;
    try{
        room = await Room.findByIdAndRemove(id);
    }catch(err){
        console.log(err);
    }

    if(!room){
        return res.status(404).json({message: 'Unable to delete by this id'})
    }
    return res.status(200).json({message: "successfully deleted"})
}

exports.getAllRooms = getAllRooms;
exports.addRoom = addRoom;
exports.getById = getById;
exports.updateRoom = updateRoom;
exports.deleteRoom = deleteRoom;