import React from 'react'
import { Route, Link } from 'react-router-dom'
import NewProfile from './NewProfile'
import ProfileEdit from './ProfileEdit'


import './Header.scss'

const alwaysOptions = (
  <React.Fragment>
    <Link to="/">Home</Link>
  </React.Fragment>
)

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)
const newProfile = (
  <React.Fragment>
    <Link to='/NewProfile'>Create a Profile</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <h1>Swirl4Life</h1>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { alwaysOptions }
      { user ? authenticatedOptions : unauthenticatedOptions }

    </nav>

  </header>
)

export default Header
