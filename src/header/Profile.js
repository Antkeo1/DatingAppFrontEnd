import React, { Component } from 'react'
const apiUrl = 'http://localhost:4741'

class Profile extends Component{
  constructor(props){
    super(props)
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }
  // to update
  handleEdit(){
    if(this.state.editable){
      const username = this.username.value
      const profileimage = this.profileimage.value
      const job = this.job.value
      const gender = this.gender.value
      const race = this.race.value
      const interest = this.interest.value
      const hobbies = this.hobbies.value
      const race_preference = this.race_preference.value
      const id = this.props.profile.id
      const profile = {id: id, username: username, profileimage: profileimage,
        job: job, gender: gender, race: race, interest: interest,
        hobbies: hobbies, race_preference: race_preference}
      this.props.handleUpdate(profile)
    }
    this.setState({
      editable: !this.state.editable
    })
  }

  render(){
    const username = this.state.editable ? <input type='text' ref={input => this.username = input}
      defaultValue={this.props.profile.username}/>:<h3>{this.props.profile.username}</h3>

    const profileimage = this.state.editable ? <input type='text' ref={input => this.profileimage = input}
      defaultValue={this.props.profile.profileimage}/>:<p>{this.props.profile.profileimage}</p>

    const job = this.state.editable ? <input type='text' ref={input => this.job = input}
      defaultValue={this.props.profile.job}/>:<p>{this.props.profile.job}</p>

    const gender = this.state.editable ? <input type='text' ref={input => this.gender = input}
      defaultValue={this.props.profile.gender}/>:<p>{this.props.profile.gender}</p>

    const race = this.state.editable ? <input type='text' ref={input => this.race = input}
      defaultValue={this.props.profile.race}/>:<p>{this.props.profile.race}</p>

    const interest = this.state.editable ? <input type='text' ref={input => this.interest = input}
      defaultValue={this.props.profile.interest}/>:<p>{this.props.profile.interest}</p>

    const hobbies = this.state.editable ? <input type='text' ref={input => this.hobbies = input}
      defaultValue={this.props.profile.hobbies}/>:<p>{this.props.profile.hobbies}</p>

    const race_preference = this.state.editable ? <input type='text' ref={input => this.race_preference = input}
      defaultValue={this.props.profile.race_preference}/>:<p>{this.props.profile.race_preference}</p>

    return(
      <div>
        {username}
        {profileimage}
        {job}
        {gender}
        {race}
        {interest}
        {hobbies}
        {race_preference}
        <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.profile.id)}>Delete</button>
      </div>
    )
  }
}

export default Profile
