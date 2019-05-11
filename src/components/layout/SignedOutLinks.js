import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
      <ul className="right">
        <li><NavLink to='/signup'>Signup</NavLink></li>       
        <li><NavLink to='/signin'>Login</NavLink></li>
      </ul>
    )
}

export default SignedOutLinks

// rad 7 och 8 såg ut så i början:
//<li><NavLink to='/'>Signup</NavLink></li>
//<li><NavLink to='/'>Signin</NavLink></li>