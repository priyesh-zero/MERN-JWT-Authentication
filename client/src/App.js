import React, { useState, useEffect } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Login from './pages/login'
import './App.css';
import { Axios } from './utils/axios';

function App() {

  const [user, updateUser] = useState(null)

  useEffect(() => {
    if (localStorage.getItem('token') && !user ) {
      Axios
        .get('/api/auth/verify')
        .then(response => {
          if (response.data.success) {
            response.data.data.isAuthenticated = true
            updateUser(response.data.data)
          }
        })
    }
  })

  return (
    <Router>
    <div>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul> */}
      <Route exact path="/" component={() => <Login user={user} update={updateUser} />} />
      <Route path="/dashboard" component={() => <h1>User</h1>} />
      {/* <Route path="/contact" component={() => <h1>Contact</h1>} /> */}
    </div>
  </Router>
  // <Login />
  );
}

export default App;
