import React,{useEffect, useState} from 'react'
import '../registration/Login.css'
function Login() {
  
  const [width, setWidth]=useState(0);

  useEffect(()=>{
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  }, []);

  const layout = width <= 950 ? "mobile" : "desktop";

  return (
    <div className={`App ${layout}`}>
        <div className='content1'>
        <form>
  <input type="text" id="name-input" placeholder='Enter your name*'/>

  <input type="email" id="email-input" placeholder='Enter email address*'/>

  <div class="password-inputs">
    <div>
      <input type="password" id="password-input" placeholder='Enter password*'/>
    </div>
    <div>
      <input type="password" id="confirm-password-input" placeholder='confirm password*'/>
    </div>
  </div>
    
    
  <div class="check-container">
        <input type="checkbox" id="remember-me"/>
        <label for="remember-me">I agree to recieve useful emails from Blockchain Solution. I can unsubscribe anyime</label>
    </div>  
    <div class="check-container">
       <input type="checkbox" id="remember-me"/>
       <label for="remember-me"> I have read, understood and accepted Terms and Condition and Privacy and policy</label>
    </div>  
  <input type="submit" id='submit' value='LOGIN'/>
</form>
  <div>
    
  </div>
        </div>
    </div>
  )
}

export default Login