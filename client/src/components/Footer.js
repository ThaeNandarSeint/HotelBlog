import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-dark text-white px-5 pt-5 pb-3 mt-5'>
        <div className='d-flex justify-content-between'>
          <div>
            <h3>Phone Support</h3>
            <p>24 HOURS A DAY</p>
            <h3>+01 234 567 890</h3>
          </div>
          <div>
            <h3>Follow Us</h3>
            <p>SOCIAL MEDIA CHANNELS</p>
            <i className="fa-brands fa-facebook-f fs-4 me-3"></i>
            <i className="fa-brands fa-twitter fs-4 me-3"></i>
            <i className="fa-brands fa-youtube fs-4 me-3"></i>
            <i className="fa-brands fa-instagram fs-4 me-3"></i>
          </div>
          <div>
            <h3>Our Newsletter</h3>
            <p>SIGN UP FOR SPECIAL OFFERS</p>
            <div className='d-flex justify-content-between'>
              <input type="text" placeholder='E-mail' />
              <div className='home-btn text-center rounded py-2 ms-2'>SUBSCRIBE</div>
            </div>
          </div>
        </div>
        <hr />
        <p className='text-center'><i className="fa-solid fa-copyright me-2"></i>Copyright - All Rights Reserved</p>
    </div>
  )
}
