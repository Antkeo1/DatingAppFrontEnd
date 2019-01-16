import React, { Component } from 'react'
const apiUrl = 'http://localhost:4741'
import AllProfile from './AllProfile'
import NewProfile from './NewProfile'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: []
    }
    this.handleUpdate = this.handleUpdate.bind(this)
    this.updateProfile = this.updateProfile.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteProfile= this.deleteProfile.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewProfile= this.addNewProfile.bind(this)
  }
  //creating one profile
  handleFormSubmit = (username, profileimage, job, gender, race, interest, hobbies, race_preference) => {
    const home = JSON.stringify({
      profile: {username: username, profileimage: profileimage,
        job: job, gender: gender, race: race, interest: interest,
        hobbies: hobbies, race_preference: race_preference}
    })
    fetch(apiUrl + '/profiles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Token token=${this.props.user.token}`
      },
      body: home
    }).then((response) => {return response.json()})
      .then((profile) =>{
        this.addNewProfile(profile)
        console.log(home)
      })

  }
  addNewProfile(profile) {
    this.setState({
      profiles: this.state.profiles.concat(profile)
    })
  }
  // delete profile
  handleDelete(id){
    fetch(`http://localhost:4741/profiles/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Token token=${this.props.user.token}`

        }
      }).then((response) => {
      this.deleteProfile
      console.log('delete success')
    })
  }
  deleteProfile(id){
    newProfile = this.state.profiles.filter((profile) => profile.id !== id)
    this.setState({
      profiles: newProfile
    })
  }
  // to update
  handleUpdate(profile){
    fetch(`http://localhost:4741/profiles/${profile.id}`,
      {
        method: 'PUT',
        body: JSON.stringify({profile: profile}),
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Token token=${this.props.user.token}`
        }
      }).then((response) => {
      this.updateProfile(profile)
    })
  }
  updateProfile(profile){
    const newProfiles = this.state.profiles.filter((p) => p.id !== profile.id)
    newProfiles.push(profile)
    this.setState({
      profiles: newProfiles
    })
  }

  componentDidMount(){
    fetch(apiUrl + '/profiles')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ profiles: data.profiles }) })
  }
  render(){
    return(
      <div>
        <NewProfile handleFormSubmit={this.handleFormSubmit} />
        <AllProfile profiles={this.state.profiles} handleDelete={this.handleDelete}
          handleUpdate = {this.handleUpdate}/>
      </div>
    )
  }
}

export default Home
