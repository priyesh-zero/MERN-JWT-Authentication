import React, { useState, useEffect } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Login from './pages/login'
import './App.css';
import { Axios } from './utils/axios';

import Loader from './components/loader'

function App() {

  const [loading, setLoading] = useState(false)
  const [user, updateUser] = useState(null)

  useEffect(() => {
    if (localStorage.getItem('token') && !user ) {
      setLoading(true)
      Axios
        .get('/api/auth/verify')
        .then(response => {
          if (response.data.success) {
            response.data.data.isAuthenticated = true
            updateUser(response.data.data)
            setLoading(false)
          }
        })
    }
  })

  if (loading) {
    return <Loader width='40vmin' height='40vmin' />
  } else {
    return (
      <Router>
        <div>
          <Route exact path="/" component={() => <Login user={user} update={updateUser} />} />
          <Route path="/dashboard" component={() => <h1>User</h1>} />
        </div>
      </Router>
      )
  }
}

export default App;
