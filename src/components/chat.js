import React, {Component} from 'react'
import SweetAlert from 'sweetalert-react';
import io from 'socket.io-client'
import MessageContainer from './message'
import imageURL from '../../resources/carbonFiber.jpg'
import plus_icon from '../../resources/new_icon.svg'
class Chat extends Component {
    constructor(props){
        super(props)

        this.state = {
            messages: [
                {

                }
            ],
            createDialog: false
        }
    }
    componentDidMount() {
        this.socket = io.connect('http://localhost:5000');
        this.socket.on('connection', data => console.log(data))
        
    }
    render(){
        
        return (
            <div className='chatWindow container-fluid'>
                <div className='row'>
                    <div className='col-md-1 iconArea'>
                        <ul className='iconList'>
                            <li>
                                <img className='iconHeading' alt='Create/Join a Room!' src={plus_icon} onClick={() => this.setState({createDialog: true})}/>
                                <SweetAlert
                                    show={this.state.createDialog}
                                    title="Create or Join a Room"
                                    text="SweetAlert in React"
                                    onConfirm={() => this.setState({ createDialog: false })}
                                />
                            </li>
                            {new Array(5).fill(0).map(e => <li><img className='iconImage' alt='Group thumbnail' src={imageURL}/></li>)}
                        </ul>
                    </div> 
                    <div className='col-md-3 menuArea'>
                        <ul className='menuList'>
                            <li className='menuHeading'>Inbox<button className='menu-right'>☻</button></li>
                            <hr/>
                            <li className='menuItem'>All Messages</li><br/>
                            <li className='menuItem'>Unread</li><br/>
                            <li className='menuItem'>Important</li><br/>
                            <hr/>
                        </ul>
                    </div>
                    <div className='col-md-8'>
                        <div className='messageArea'>
                            <ul>
                            {this.state.messages.map((e,i) => 
                                <MessageContainer key={i} sender={e.sender} message={e.content} timestamp={e.timestamp}/>
                            )}
                            </ul>
                        </div>
                        <div className='messageBox'>
                            <div className='textHolder'>
                                <textarea rows='1' placeholder=" Don't be shy, send a message!"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

/*

<div className='col-md-2'>
                        <li className='chatLogout btn btn-danger'><Link to='/'>Logout</Link></li>
                    </div>

*/

export default Chat