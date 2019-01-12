import React from 'react'

const Profile = props => {
  return (
    <div>
      <p>User: {props.username}</p>
      <p>{props.profileImage }</p>
      <p>Works at: { props.job }</p>
      <p>Gender Id: { props.gender }</p>
      <p>Race: { props.race }</p>
      <p>Interest: {props.interest}</p>
      <p>Hobbies: { props.hobbies }</p>
      <p>Preference: { props.race_preference }</p>

    </div>
  )
}

export default Profile
