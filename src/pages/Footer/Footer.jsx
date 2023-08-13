import React from 'react'
import './Footer.css'
import { Button } from '../../components/Buttons/Button'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p className='footer-subscription-text'>
                Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
            <div className='input-areas'>
                <form>
                    <p><input type="email" name="email" placeholder='Email' className='footer-input'/></p>
                    <p><textarea type="textarea" name="message" placeholder='Message' className='footer-input'/></p>
                    <Button buttonStyle='btn--outline'>
                        Contact Us
                    </Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/testemonial'>Testimonials</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link className='social-logo'>
                    <img src='assets/images/TaskMates_forDark.png' className='navbar-img-logo'/>
                    </Link>
                </div>
                <small className='website-rights'>Task Mates @ 2023</small>
                <div className='social-icons'>
                    <Link className="social-icon-link facebook" 
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                    ></Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer