import React, {Component}from 'react'
const apiUrl = 'http://localhost:4741'
import ProfileEdit from './ProfileEdit'
import { Route, Link } from 'react-router-dom'

const ProfileShow = (props) => {
  <div className='container' key={props.id}>
    <ProfileEdit profile={profile}/>
  </div>
  return(
    <div>
      {profiles}
    </div>
  )
}


export default ProfileShow
