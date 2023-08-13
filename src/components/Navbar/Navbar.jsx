import React, { useEffect, useState } from 'react'
import { Link as T } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
import { Button } from '../Buttons/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/fontawesome-free-solid'
import { } from '@fortawesome/free-brands-svg-icons'
import { } from '@fortawesome/fontawesome-svg-core'
import { } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else{
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    },[])

    window.addEventListener('resize', showButton);
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    <img src='assets/images/TaskMates_forDark.png' className='navbar-img-logo'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="#home" className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="#services" className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="#products" className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar