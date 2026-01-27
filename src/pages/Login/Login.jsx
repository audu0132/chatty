/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import './Login.css'
import assets from '../../assets/assets'
import { useState } from 'react'

const login = () => {

  const [currstate, setCurrState] = useState("Sign Up");


    
  return (
    <div className='login'>
        <img src={assets.logo_big} alt="" className='logo' />
      <form action="" className='login-form'>
        <h2>{currstate}</h2>
        {currstate === "Sign Up" ? <input type="text" placeholder='userName' className='form-input' required />: null}
        <input type="email" placeholder='Email Address' className='form-input'required />
        <input type="password" placeholder='password' className='form-input' required />
        <button type='submit' className='submit-btn'>{currstate === "Sign Up"? "Create account":"Login now"}</button>

        <div className="login-term">
            <input type="checkbox" />
            <p> Agree to the term of use & privacy policy</p>
        </div>
        <div className="login-forgot">
          {
            currstate === "Sign Up" 
            ? <p className="login-toggle"> Already have an account <span onClick={()=>setCurrState("Login")}>Login Here</span>? Login</p>
            :<p className="login-toggle"> Create an account <span onClick={()=>setCurrState("Sign Up")}>Click Here</span> ? Sign Up</p>
          }
            
            
        </div>
      </form>
    </div>
  )
}

export default login
