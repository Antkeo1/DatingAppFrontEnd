import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'



class ProfileForm extends Component {
  constructor() {
    super()
    this.state = {
      profile: {
        username:' ',
        profileimage:' ',
        job: ' ',
        gender: ' ',
        race: ' ',
        interest: ' ',
        hobbies: ' ',
        race_preference:' '
      }

    }
  }
  createProfile = (event) => {
    console.log('createProfile')
    fetch('http://localhost:4741/profiles', {
      profile: {
        username: this.state.username,
        profileimage:this.state.profileimage,
        job: this.state.job,
        gender: this.state.gender,
        race: this.state.race,
        interest: this.state.interest,
        hobbies: this.state.hobbies,
        race_preference:this.state.race_preference
      }
    })
      .then(console.log('success'))
      .catch(console.error)
  }
  onUserName = event => {
    this.setState({
      profile: {
        username: event.target.value
      }
    })
  }
  onProfileImage = event => {
    this.setState({
      profile: {
        profileimage: event.target.value
      }
    })
  }
  onJob = event => {
    this.setState({
      profile: {
        job: event.target.value
      }
    })
  }
  onGender = event => {
    this.setState({
      profile: {
        gender: event.target.value
      }
    })
  }
  onRace = event => {
    this.setState({
      profile: {
        race: event.target.value
      }
    })
  }
  onInterest = event => {
    this.setState({
      profile: {
        interest: event.target.value
      }
    })
  }
  onHobbies = event => {
    this.setState({
      profile: {
        hobbies: event.target.value
      }
    })
  }
  onRace_preference = event => {
    this.setState({
      profile: {
        race_preference: event.target.value
      }
    })
  }

  render() {
    return (
      <div className='text-center'>
        <h3>Lets Create your Profile</h3>
        <form onSubmit= {this.createProfile}>

          <input placeholder='username'
            type= 'text'
            value= {this.state.profile.username}
            onChange={this.onUserName}/>

          <input placeholder='ImageUrl'
            type='text'
            value={this.state.profile.profileimage}
            onChange={this.onProfileImage} />

          <input placeholder='Works at'
            type='text'
            value={this.state.profile.job}
            onChange={this.onJob} />

          <input placeholder='Gender ID'
            type='text'
            value={this.state.profile.gender}
            onChange={this.onGender} />

          <input placeholder='Race'
            type='text'
            value={this.state.profile.race}
            onChange={this.onRace} />

          <input placeholder='Interest'
            value={this.state.profile.interest}
            onChange={this.onInterest} />

          <input placeholder='Hobbies'
            type='text'
            value={this.state.profile.hobbies}
            onChange={this.onHobbies} />

          <input placeholder='Whats your type'
            type='text'
            value={this.state.profile.race_preference}
            onChange={this.onRace_preference} />

          <input type='submit'
            value='Create Profile!'
          />
        </form>
      </div>
    )
  }
}

export default ProfileForm
