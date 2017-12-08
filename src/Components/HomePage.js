import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class HomePage extends Component {
  render() {
    return (
      <div>
      <div className="homepage">
        <div className='page-header'>
          <h2>Welcome to BootUp!</h2>
        </div>
          <p>DBC Bootup lets Dev Bootcamp graduates share their experiences interviewing for web development jobs, helping other boots get insight and a leg up on the interview process. Have an interview coming up? See what advice other boots have while interviewing at that company. Gone through some interviews? Share your experience with the DBC community.</p>
      </div>
        <div id="linkedin-login">
        <a href="/api/auth/linkedin" className='link-button'>Login with LinkedIn to Get Started</a>
        </div>
      </div>
    )
  }
}

export default HomePage
