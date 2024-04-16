import React from 'react'
import NavPanel from '../navPanel/NavPanel'
import Logout from '../logout/Logout'

import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div>
            <img src="public/images/logo.png" alt="Logo" />
        </div>

        <div>
            <NavPanel/>
        </div>

        <div>
            <Logout />
        </div>
        
    </div>
  )
}

export default Header