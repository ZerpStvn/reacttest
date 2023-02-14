import React,{useEffect,useState} from 'react'
import '../registration/Navbar.css'
function Navbar() {
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
  
    const app = width <= 950 ? "mobile" : "desktop";
  return (
    <div className={`Navbar ${app}`}>
       <div className='ass'>
        <button className='btn'>Click me</button>
       <ul>
            <li>home</li>
            <li>View</li>
            <li>List</li>
        </ul>
       </div>
    </div>
  )
}

export default Navbar