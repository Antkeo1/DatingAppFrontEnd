import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'



class ProfileForm extends Component {
  constructor() {
    super()
    this.state = {
      profile: {
        user:' ',
        username:' ',
        profileImage:' ',
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
    fetch('http://localhost:4741/profile', {
      profile: {
        username: this.state.username,
        profileImage:this.state.profileImage,
        job: this.state.job,
        gender: this.state.gender,
        race: this.state.race,
        interest: this.state.interest,
        hobbies: this.state.hobbies,
        race_preference:this.state.race_preference
      }
    })
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
        profileImage: event.target.value
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
          {/*<input type='number'
                placeholder='ID of movie to get'
                value={this.state.movieIndex}
                onChange={this.onIdChange}/>
                */}
          <input placeholder='username'
            value= {this.state.profile.username}
            onChange={this.onUserName}/>

          <input placeholder='ImageUrl'
            value={this.state.profile.profileImage}
            onChange={this.onProfileImage} />

          <input placeholder='Works at'
            value={this.state.profile.job}
            onChange={this.onJob} />

          <input placeholder='Gender ID'
            value={this.state.profile.gender}
            onChange={this.onGender} />

          <input placeholder='Race'
            value={this.state.profile.race}
            onChange={this.onRace} />

          <input placeholder='Interest'
            value={this.state.profile.interest}
            onChange={this.onInterest} />

          <input placeholder='Hobbies'
            value={this.state.profile.hobbies}
            onChange={this.onHobbies} />

          <input placeholder='Whats your type'
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
