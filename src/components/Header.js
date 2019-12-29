import React from 'react'
import PropTypes from 'prop-types'
// import TypeWriter from 'components/typewriter.js';

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        {/* <script src = 'typerwriter.js'></script> */}
        <div className="logo">
            <span className="icon fa-diamond"></span>
            {/* <span className="icon"><img src="images/profile.jpeg" alt="" /></span> */}
        </div>
        <div className="content">
            <div className="inner">
                {/* <h1>Kerry Wu
                <span class = "TypeWriter" data-wait = "3000" data-words = '["Kerry Wu"]'></span></h1> */}
                <h1>Kerry Wu</h1>
                <p>Welcome to my personal portfolio website</p>
                <p>University of Michigan, Class of 2020</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('edu')}}>Education</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('proj')}}>Projects</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
