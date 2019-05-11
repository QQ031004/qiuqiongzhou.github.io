import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    //props.signOut()
    return (
        <ul className="right">
        <li><NavLink to='/create'>New Project</NavLink></li>
        <li onClick={props.signOut}>Log Out</li>
        <li><NavLink to='/' className='btn btn-floating pink lighten-1'>
            {props.profile.initials}
        </NavLink></li>
       
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)

    // Rad 7 såg ut så i början:
    //<li><NavLink to='/'>New Project</NavLink></li>
    //<li><NavLink to='/'>Log Out</NavLink></li>