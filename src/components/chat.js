import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Sidebar, SidebarItem} from 'react-responsive-sidebar'
class Chat extends Component {
    constructor(props){
        super(props)

        this.state = {
            items: [
                <SidebarItem>Dashboard </SidebarItem>,
                <SidebarItem>Profile</SidebarItem>,
                <SidebarItem>Settings</SidebarItem>
            ]
        }
    }

    render(){
        return (
            <Sidebar content={this.state.items}>
                <div className='container-fluid'>
                    <li className='btn btn-danger'><Link to='/'>Logout</Link></li>
                </div>
            </Sidebar>
        )
    }
}

export default Chat