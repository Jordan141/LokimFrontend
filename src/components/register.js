import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {URL} from '../../config.json'
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
        axios.post(`http://localhost:5000/register`, this.state)
            .then(response => {
                console.log(response, typeof response, JSON.stringify(response))
                if(response.status === 200){
                    alert('Registration successful!')
                    return
                } else {
                    alert(`${response.status}: ${response.statusText}`)
                }
            })
            .catch(error => {
                console.log(error)
                alert('Something bad happened!')
            })
        //alert('A new user was submitted!', JSON.stringify(this.state))
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
                <li className='btn btn-secondary' style={{'margin' : '10px 10px'}}><Link to='/'>Go Back</Link></li>
            </form>
            
            </div>
        )
    }
}

export default Register