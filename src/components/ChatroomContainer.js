import React, { Component } from 'react'
import {url} from '../constants'
import ChatroomForm from './ChatroomForm'
import {connect} from 'react-redux'
import {addMessages} from '../actions/actions'

class ChatroomContainer extends Component {
    state = {
        messages: []
    }
    source = new EventSource (`${url}/stream`)


    componentDidMount() {
        //console.log("componenDidMount of chatroom")
        this.source.onmessage = event => {
                console.log("Got a message!", event)
                // data comes from the console.log, finding data in browser
                const messages = JSON.parse(event.data)
                console.log(JSON.parse(event.data), "event data?")
                console.log(messages, "messages?")
                this.setState({messages
                })
                /// this below comes from the action addMessages
                this.props.addMessages(messages)
        }
        console.log("source", this.source)
    }
    render() {
        console.log("local state", this.state)
        if (!this.props.messages)
        return "Wait for messages"
        return (
            <div>
             <ul> 
             {
                 this.props.messages.map(message => <li key={message.id}> {message.message} </li>)
             }
             </ul>
             <ChatroomForm/>
            </div>
        )
    }
}

function mapStateToProps (reduxState) {
    console.log("mstp of chatroom component", reduxState)
    return {
    messages: reduxState.message
    }
}

const mapDispatchToProps = { addMessages }

export default connect(mapStateToProps, mapDispatchToProps)(ChatroomContainer)