import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import MessageContainer from './message'
import seedData from '../../seedChatData'

class Chat extends Component {
    constructor(props){
        super(props)

        this.state = {
            messages: [
                {

                }
            ]
        }
    }
    componentDidMount() {
        console.log(seedData)
        console.log(seedData.rooms.ROOM_MESSAGES[0])
        const chatData = seedData.rooms.ROOM_MESSAGES
        this.setState({ messages: chatData})
    }
    render(){
        return (
            <div className='chatWindow container-fluid'>
                <div className='menuArea row'>
                    <div className='col-md-10'>

                    </div>
                    <div className='col-md-2'>
                        <li className='chatLogout btn btn-danger'><Link to='/'>Logout</Link></li>
                    </div>
                    
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='messageArea'>
                            <ul>
                            {this.state.messages.map((e,i) => 
                                <MessageContainer key={i} sender={e.sender} message={e.content} timestamp={e.timestamp}/>
                            )}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='messageBox row'>
                    <div className='col-md-12'>
                        <div className='textHolder'>
                            <textarea rows='1' placeholder=" Don't be shy, send a message!"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chat