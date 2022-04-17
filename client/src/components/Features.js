import React from 'react';
import { Link } from 'react-router-dom';

export const Features = () => {
    return (
        <div>
            <h2 className='text-center mt-5'>Featured Rooms</h2>
            <hr className='hr mx-auto'></hr>
            <div className='container'>
                <div className='d-flex justify-content-between'>
                    <div className='feature-box'>
                        <div className='p-1 rounded feature-price'>
                            <div style={{ fontSize: "20px" }}>$ 500</div>
                            <div style={{ fontSize: "10px" }}>per night</div>
                        </div>
                        <div className='p-2 feature-middle'>
                            <Link className='text-decoration-none text-white' to='/room'>FEATURES</Link>
                        </div>
                        <img src='/images/moon2.jpeg' className='feature-img' />
                        <div className='text-center feature-title'>Family Deluxe</div>
                    </div>
                    <div className='feature-box'>
                        <div className='p-1 rounded feature-price'>
                            <div style={{ fontSize: "20px" }}>$ 500</div>
                            <div style={{ fontSize: "10px" }}>per night</div>
                        </div>
                        <div className='p-2 feature-middle'>
                            <Link className='text-decoration-none text-white' to='/room'>FEATURES</Link>
                        </div>
                        <img src='/images/moon2.jpeg' className='feature-img' />
                        <div className='text-center feature-title'>Family Deluxe</div>
                    </div>
                    <div className='feature-box'>
                        <div className='p-1 rounded feature-price'>
                            <div style={{ fontSize: "20px" }}>$ 500</div>
                            <div style={{ fontSize: "10px" }}>per night</div>
                        </div>
                        <div className='p-2 feature-middle'>
                            <Link className='text-decoration-none text-white' to='/room'>FEATURES</Link>
                        </div>
                        <img src='/images/moon2.jpeg' className='feature-img' />
                        <div className='text-center feature-title'>Family Deluxe</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
