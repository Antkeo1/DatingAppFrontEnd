import React, { Component } from 'react'
const apiUrl = 'http://localhost:4741'

class Profile extends Component{

  render(){
    return(
      <div>
        <h1>{this.props.profile.username}</h1>
        <p>{this.props.profile.profileimage}</p>
        <p>{this.props.profile.job}</p>
        <p>{this.props.profile.gender}</p>
        <p>{this.props.profile.race}</p>
        <p>{this.props.profile.interest}</p>
        <p>{this.props.profile.hobbies}</p>
        <p>{this.props.profile.race_preference}</p>
        <button onClick={() => this.props.handleDelete(this.props.profile.id)}>Delete</button>
      </div>
    )
  }
}

export default Profile
