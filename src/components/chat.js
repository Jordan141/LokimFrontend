import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Link} from 'react-router-dom'
import { RaisedButton } from 'material-ui';

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
                <MuiThemeProvider>
                    <RaisedButton label='Default' />
                </MuiThemeProvider>
            </div>
        )
    }
}

export default Chat