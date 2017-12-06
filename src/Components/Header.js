import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h2>DBC Bootup</h2>
        <nav>
          <ul>
            <li><Link to="/">Index</Link></li>
            <li><Link to="/users/:id">Profile</Link></li>
            <li><Link to="/companies">Companies</Link></li>
            <li><Link to="/interviews">Interviews</Link></li>
            <li><Link to="/interviews/new">New Interview</Link></li>
            <li><Link to="/search">Company Search</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Header