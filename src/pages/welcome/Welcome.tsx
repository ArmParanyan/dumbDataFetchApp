import React from 'react'
import { useNavigate } from 'react-router-dom'

import "./Welcome.css"

const Welcome = () => {

    const navigate = useNavigate();

  return (
    <div className='welcome-page'>
        <div className="welcome">
            <h2>Welcome to Dumb data fetch app</h2>
        </div>
        
        <div className='login-registration-buttons-wrapper'>
            <div className='login-button-wrapper'>
                <button className='login-button' onClick={() => navigate("/login")}>
                    Login
                </button>
            </div>

            <div className='registration-button-wrapper'>
                <button className='registration-button' onClick={() => navigate("/register")}>
                    Register
                </button>
            </div>
        </div>
    </div>
  )
}

export default Welcome;