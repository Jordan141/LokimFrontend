import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './components/home'
import Register from './components/register'
import './App.css';
class App extends Component {
  render() {
    return (
      <Router>
        <div className='container-fluid'>
          <Route exact path='/' component={Home} />
          <Route path='/register' component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
