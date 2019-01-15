import React from 'react'
const apiUrl = 'http://localhost:4741'

const AllProfile = (props) => {
  console.log(props.profiles)
  const profiles = props.profiles.map((profile) => {
    return(
      <div key={profile.id}>
        <h1>{profile.username}</h1>
        <p>{profile.profileimage}</p>
        <p>{profile.job}</p>
        <p>{profile.gender}</p>
        <p>{profile.race}</p>
        <p>{profile.interest}</p>
        <p>{profile.hobbies}</p>
        <p>{profile.race_preference}</p>
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
