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
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewProfile= this.addNewProfile.bind(this)
  }
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
  componentDidMount(){
    fetch(apiUrl + '/profiles')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ profiles: data.profiles }) })
  }
  render(){
    return(
      <div>
        <NewProfile handleFormSubmit={this.handleFormSubmit} />
        <AllProfile profiles={this.state.profiles} />
      </div>
    )
  }
}

export default Home
