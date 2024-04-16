import React from 'react'
import { NavLink } from 'react-router-dom'

import "./NavPanel.css"

const NavPanel = () => {
  return (
    <div className='nav'>
        
        <div>
            <NavLink to={"/posts"} className="link">Posts</NavLink>
        </div>

        <div>
            <NavLink to={"/comments"} className="link">Comments</NavLink>
        </div>

        <div>
            <NavLink to={"/images"} className="link">Images</NavLink>
        </div>
    </div>
  )
}

export default NavPanel