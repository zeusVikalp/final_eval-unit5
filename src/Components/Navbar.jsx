import React from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import './Navbar.css'

const Navbar = () => {
    const{isAuth} = React.useContext(AuthContext);
  return (
    <div className='nav'>

        {/* <a href="/">Home</a> */}
     
        

        {!isAuth ? <>
        <Link to="/login">
        <span className="login-btn">
            Log in
        </span>
          </Link>
          </>
          : <span><a href="/login">Logout</a></span>
        }    
           {!isAuth ? <>
        <Link to="/login">
        <span>
            
        </span>
          </Link>
          </>
          : <span><a href="/">Home</a></span>
        }      
        <a href="/register">Register</a>
        <a href="/employee">Employee</a>
    </div>
  )
}

export { Navbar}
