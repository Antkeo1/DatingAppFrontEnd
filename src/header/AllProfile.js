import React from 'react'
const apiUrl = 'http://localhost:4741'
import ProfileEdit from './ProfileEdit'
import { Route, Link } from 'react-router-dom'

const AllProfile = (props) => {
  const profiles = props.profiles.map((profile) => {
    console.log(props)
    return(
      <div className='container' key={profile.id}>
        <ProfileEdit profile={profile}
          handleLike={props.handleLike}
          handleDelete={props.handleDelete}
          handleUpdate={props.handleUpdate}/>
      </div>
    )
  })
  return(
    <div>
      {profiles}
    </div>
  )
}

export default AllProfile
