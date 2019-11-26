import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Route exact path="/" component={() => <h1>Root</h1>} />
      <Route path="/users" component={() => <h1>User</h1>} />
      <Route path="/contact" component={() => <h1>Contact</h1>} />
    </div>
  </Router>
  );
}

export default App;
