import React from 'react'
import "../CSS/Loginsignup.css"

const Loginsignup = () => {
  return (
    <div className="loginsigup">
      <div className="loginsigup-container">
        <h1>Sign-Up</h1>
        <div className="loginsigup-fields">
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Email Address' />
            <input type="password" placeholder='Password' />
            <button>Continue</button>
        </div>
        
        <p className="loginsignup-login">
          Already have an account ? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By conutinuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Loginsignup
