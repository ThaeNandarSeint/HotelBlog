import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="nav-link" to='/'>Beach Resort</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/rooms'>ROOMS</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
