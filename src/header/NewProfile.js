import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'

const NewProfile = (props) => {
  const formFields = {}
  return(
    <form onSubmit={ (event) => { props.handleFormSubmit(formFields.username.value, formFields.profileimage.value,
      formFields.job.value, formFields.gender.value, formFields.race.value, formFields.interest.value, formFields.hobbies.value,
      formFields.race_preference.value)
    event.target.reset()
    }
    }>
      <input ref={input => formFields.username = input} placeholder='username'/>
      <input ref={input => formFields.profileimage = input} placeholder='Enter a description' />
      <input ref={input => formFields.job = input} placeholder='Enter a description' />
      <input ref={input => formFields.gender = input} placeholder='Enter a description' />
      <input ref={input => formFields.race = input} placeholder='Enter a description' />
      <input ref={input => formFields.interest = input} placeholder='Enter a description' />
      <input ref={input => formFields.hobbies = input} placeholder='Enter a description' />
      <input ref={input => formFields.race_preference = input} placeholder='Enter a description' />
      <button>Submit</button>
    </form>
  )
}



export default NewProfile
