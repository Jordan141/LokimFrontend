import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/home'
import Register from './components/register'
import Chat from './components/chat'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container-fluid'>
          <Route exact path='/' component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/chat' component={Chat} />
        </div>
      </Router>
    );
  }
}

export default App;
