import React from 'react'
import { useNavigate } from 'react-router-dom'

import "./Logout.css"

const Logout = () => {

    const navigate = useNavigate();

  return (
    <div>
        <button className="logout-button" onClick={() => navigate("/")}>Logout</button>
    </div>
  )
}

export default Logout