import React from 'react'
import './Login.css'
import assets from '../../assets/assets'

const login = () => {
    

    
  return (
    <div className='login'>
        <img src={assets.logo_big} alt="" className='logo' />
      <form action="" className='login-form'>
        <h2>Sign Up</h2>
        <input type="text" placeholder='userName' className='form-input' required />
        <input type="email" placeholder='Email Address' className='form-input'required />
        <input type="password" placeholder='password' className='form-input' required />
        <button type='submit' className='submit-btn'>Sing Up</button>

        <div className="login-term">
            <input type="checkbox" />
            <p> Agree to the term of use & privacy policy</p>
        </div>
        <div className="login-forgot">
            <p className="login-toggle"> 
                Already have an account <span>Click Here</span>? Login
            </p>
        </div>
      </form>
    </div>
  )
}

export default login
