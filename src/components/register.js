import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Register extends Component {
    constructor(props){
        super(props)

        this.state = {
            'username': '',
            'password': '',
            'email': '',
            'secret': ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        //Static placeholders
        const settings = {'Username': 'username' , 'Password' : 'password', 'Email': 'email', 'Secret Key': 'secret'}
        //Find key for object using placeholders
        const key = settings[event.target.placeholder]
        //Only change state of specific value
        this.setState({ [key] : event.target.value})
    }
    
    handleSubmit(event){
        //Encrypt all data and send to server
        //..
        //..
        
        alert('A new user was submitted!', JSON.stringify(this.state))
        event.preventDefault()
    }
    render(){
        return (
            <div className='container-fluid registerDiv'>
            <h2> Register for a new LokIM Account </h2>
            <form onSubmit={this.handleSubmit}>
                <input type='text' className='userInput' placeholder='Username' value={this.state.username} onChange={this.handleChange} required/><br/>
                <input type='password' className='userInput' placeholder='Password' value={this.state.password} onChange={this.handleChange} required/><br/>
                <input type='text' className='userInput' placeholder='Email' value={this.state.email} onChange={this.handleChange} required/><br/>
                <input type='text' className='userInput' placeholder='Secret Key' value={this.state.secret} onChange={this.handleChange} required/><br/>
                <input type='submit' className='btn btn-primary' value='Register'/>
            </form>
            <li className='btn btn-danger' style={{'margin' : '10px 0'}}><Link to='/'>Go Back</Link></li>
            </div>
        )
    }
}

export default Register