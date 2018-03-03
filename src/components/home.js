import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import logo from '../logo.svg';

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            successfulLogin: false
        }
        this.login = this.login.bind(this)
    }
    login(){
        alert('Login button clicked!')
        //Login to server, if status returns 200, enter chat component
        this.setState({successfulLogin: true})
    }
    render(){
        if(this.state.successfulLogin){
            return <Redirect to='/chat'/>       
        }
        return (
            <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React/Electron</h2>
                <p className="App-intro">
                Hello LokIM User!
                </p>
            </div>
            <input className='userInput' type="text" placeholder="Username"/><br/>
            <input className='userInput' type="password" placeholder="Password"/><br/>
            <ul>
                <li className="homeButton btn btn-primary" onClick={this.login}>Login</li>
                <li className="homeButton btn btn-secondary"><Link to='/register'>Create Account</Link></li>
            </ul>
            <p className='info-paragraph'>LokIM connects to other users via websockets and no information is stored on the server post-emission. All data regarding a user is stored on said user's device.</p>
            </div>
        )
    }
}

export default Home