import React from 'react'
import '../../App.css'
import { Button } from '../Buttons/Button'
import './MainArticle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/fontawesome-free-solid'
import { } from '@fortawesome/free-brands-svg-icons'
import { } from '@fortawesome/fontawesome-svg-core'
import { } from '@fortawesome/free-solid-svg-icons'

function MainArticle() {
  return (
    <div className='main-article-container' id="home">
        <video src="/videos/video-2.mp4" autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='main-article-btns'>
            <Button className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    GET STARTED
            </Button>
            <Button className='btns'
                buttonStyle='btn-primary'
                buttonSize='btn--large'>
                    WATCH TRAILER <FontAwesomeIcon icon='fas fa-bars'/>
            </Button>
        </div>
    </div>
  )
}

export default MainArticle