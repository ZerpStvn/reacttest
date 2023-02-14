import React from 'react'
import '../registration/Register.css'
function Register() {
  return (
    <div className='content-tab'>
        <div className='content1'>
        <form>
  

    <input enterKeyHint='Email' placeholder='Email Address*' type="email" id="email" name="email"/>
    <input type="password" id="password" placeholder='Passowrd*' name="password"/>
    <input type="text" id="name"  name="name" placeholder='Two Factor Authentication'/>
    
    <div class="container">
        <input type="checkbox" id="remember-me"/>
        <label for="remember-me">Stay Connected</label>
    </div>
    <input type="submit" value="LOGIN"/>
  </form>
  <div>
    
  </div>
        </div>
    </div>
  )
}

export default Register