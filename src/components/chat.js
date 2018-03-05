import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Chat extends Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    render(){
        return (
            <div className='container-fluid'>
                <li className='btn btn-danger'><Link to='/'>Logout</Link></li>
            </div>
        )
    }
}

export default Chat