import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import './NewProfile.scss'

const NewProfile = (props) => {
  const formFields = {}
  return (
    <form onSubmit = {(event) => {
      props.handleFormSubmit(
        formFields.username.value,
        formFields.profileimage.value,
        formFields.job.value,
        formFields.gender.value,
        formFields.race.value,
        formFields.interest.value,
        formFields.hobbies.value,
        formFields.race_preference.value),
      formFields.hide()
      event.target.reset()
    }}>
      <h3>Create your Profile</h3>
      <input ref={input => formFields.username = input} placeholder='username'/>
      <input ref={input => formFields.profileimage = input} placeholder='image URL' />
      <input ref={input => formFields.job = input} placeholder='Where do you work' />
      <input ref={input => formFields.gender = input} placeholder='Gender Identity' />
      <input ref={input => formFields.race = input} placeholder='race' />
      <input ref={input => formFields.interest = input} placeholder='what are your interest' />
      <input ref={input => formFields.hobbies = input} placeholder='what do you like to do' />
      <input ref={input => formFields.race_preference = input} placeholder='preference of race' />
      <button type="submit" className="btn btn-primary" path='/'>Submit</button>
    </form>
  )
}



export default NewProfile
