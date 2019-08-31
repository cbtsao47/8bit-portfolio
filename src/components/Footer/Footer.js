import React from 'react'
import Social from '../Social/Social'
import './footer.scss'
function Footer({screenSize}) {

    return (
        <div className='footer-container nes-container is-dark is-rounded'>
            <Social screenSize={screenSize}/>
        </div>
    )
}

export default Footer
