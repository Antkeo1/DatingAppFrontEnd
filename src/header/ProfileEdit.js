import React, { Component } from 'react'
const apiUrl = 'http://localhost:4741'
import ProfileShow from './ProfileShow'
import { Route, Link } from 'react-router-dom'

class ProfileEdit extends Component{
  constructor(props){
    super(props)
    this.state = {
      liked: false,
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.handleViewOne= this.handleViewOne.bind(this)
  }
  // view one
  handleViewOne(id) {
    fetch(apiUrl + '/profiles/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'

      }
    }).then((response) => {return response.json()})

  }

  toggleLike = event => {
    if(!this.state.liked){
      this.props.handleLike(profile)
    }
    this.setState({
      liked: this.state.liked
    })
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
      placeholder='username' defaultValue={this.props.profile.username}/>:<h3>{this.props.profile.username}</h3>

    const profileimage = this.state.editable ? <input type='text' ref={input => this.profileimage = input}
      placeholder='profileimage' defaultValue={this.props.profile.profileimage}/>:<p>{this.props.profile.profileimage}</p>

    const job = this.state.editable ? <input type='text' ref={input => this.job = input}
      placeholder='job' defaultValue={this.props.profile.job}/>:<p>{this.props.profile.job}</p>

    const gender = this.state.editable ? <input type='text' ref={input => this.gender = input}
      placeholder='gender identity' defaultValue={this.props.profile.gender}/>:<p>{this.props.profile.gender}</p>

    const race = this.state.editable ? <input type='text' ref={input => this.race = input}
      placeholder='race' defaultValue={this.props.profile.race}/>:<p>{this.props.profile.race}</p>

    const interest = this.state.editable ? <input type='text' ref={input => this.interest = input}
      placeholder='interest' defaultValue={this.props.profile.interest}/>:<p>{this.props.profile.interest}</p>

    const hobbies = this.state.editable ? <input type='text' ref={input => this.hobbies = input}
      placeholder='hobbies' defaultValue={this.props.profile.hobbies}/>:<p>{this.props.profile.hobbies}</p>

    const race_preference = this.state.editable ? <input type='text' ref={input => this.race_preference = input}
      placeholder='preference' defaultValue={this.props.profile.race_preference}/>:<p>{this.props.profile.race_preference}</p>

    return(
      <div className='container'>
        {username}
        {profileimage}
        {job}
        {gender}
        {race}
        {interest}
        {hobbies}
        {race_preference}
        {this.state.liked ? 'Liked' : null}
        <button type='submit' className="btn btn-primary" onClick={() => this.props.handleLike()}>{this.state.liked ? 'Liked' : 'Like'}</button>
        <button type="submit" path='/profiles/:id' className="btn btn-primary" onClick={() => this.handleViewOne(this.props.profile.id)}>View</button>
        <button type="submit" className="btn btn-primary" onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button type="submit" className="btn btn-danger" onClick={() => this.props.handleDelete(this.props.profile.id)}>Delete</button>
      </div>
    )
  }
}

export default ProfileEdit
