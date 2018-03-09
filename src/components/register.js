import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios'
//import {URL} from '../../config.json'
class Register extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
            email: '',
            secret: '',
            successfulRegister: false
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
            if(response.status === 200) this.setState({successfulRegister: true})
            console.log(`${response.status}: ${response.statusText}`)
        })
        .catch(error => {
            console.log(error)
            alert('Something bad happened!')
        })
        event.preventDefault()
    }
    render(){
        if(this.state.successfulRegister){
            return <Redirect to='/'/>
        }
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