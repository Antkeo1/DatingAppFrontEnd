import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'



class ProfileForm extends Component {
  constructor() {
    super()
    this.state = {
      profile: {
        user:' ',
        username:'',
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
    const profileValid = this.state.user
    if (profileValid) {
      axios.post(`http://localhost:4741/profile/${this.state.profile}`, {
        profile: {
          username: ' ',
          profileImage:' ',
          job: ' ',
          gender: ' ',
          race: ' ',
          interest: ' ',
          hobbies: ' ',
          race_preference:' '
        }
      })
        .then(res => this.setState({message: `made a new profile: ${res.data.profile.user}`}))
        .catch(console.error)
    } else {
      this.setState({ message: 'you have invalid form data!'})
    }
  }
  onUserName = event => {
    this.setState({
      username: event.target.value
    })
  }
  onProfileImage = event => {
    this.setState({
      profileImage: event.target.value
    })
  }
  onJob = event => {
    this.setState({
      job: event.target.value
    })
  }
  onGender = event => {
    this.setState({
      gender: event.target.value
    })
  }
  onRace = event => {
    this.setState({
      race: event.target.value
    })
  }
  onInterest = event => {
    this.setState({
      interest: event.target.value
    })
  }
  onHobbies = event => {
    this.setState({
      hobbies: event.target.value
    })
  }
  onRace_preference = event => {
    this.setState({
      race_preference: event.target.value
    })
  }

  render() {
    return (
      <div className='text-center'>
        <form onSubmit= {this.createProfile}>
          {/*<input type='number'
                placeholder='ID of movie to get'
                value={this.state.movieIndex}
                onChange={this.onIdChange}/>
                */}
          <input placeholder='username'
            value= {this.state.username}
            onChange={this.onUserName}/>

          <input placeholder='ImageUrl'
            value={this.state.ProfileImage}
            onChange={this.onProfileImage} />

          <input placeholder='Works at'
            value={this.state.Job}
            onChange={this.state.onJob} />

          <input placeholder='Gender ID'
            value={this.state.Gender}
            onChange={this.onGender} />

          <input placeholder='Race'
            value={this.state.Race}
            onChange={this.onRace} />

          <input placeholder='Interest'
            value={this.state.Interest}
            onChange={this.onInterest} />

          <input placeholder='Hobbies'
            value={this.state.Hobbies}
            onChange={this.onHobbies} />

          <input placeholder='Whats your type'
            value={this.state.Race_preference}
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
