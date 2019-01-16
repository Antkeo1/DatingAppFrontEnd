import React from 'react'
const apiUrl = 'http://localhost:4741'
import Profile from './Profile'

const AllProfile = (props) => {
  const profiles = props.profiles.map((profile) => {
    console.log(props)
    return(
      <div key={profile.id}>
        <Profile profile={profile} handleDelete={props.handleDelete}
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
