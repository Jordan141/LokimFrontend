import React, {Component} from 'react'

class MessageContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            'sender' : '',
            'message': '',
            'timestamp': ''
        }
    }

    componentDidMount(){
        this.setState({
            sender: this.props.sender,
            message: this.props.message,
            timestamp: this.props.timestamp
        })
    }

    render(){
        return(
            <div className='messageContainer'>
                <li>{this.state.sender}</li>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default MessageContainer