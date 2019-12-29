import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Kerry Wu MMXIX - MMXX.</p>
        <p className="trademark">Third-party trademarks are the property of their respective third-party owners. Presence of a third-party trademark does not mean that I have any relationship with that third-party or that the third-party endorses me or my services.</p>
        <p className = 'trademark'>Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
