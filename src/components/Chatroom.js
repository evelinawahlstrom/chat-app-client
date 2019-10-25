import React, { Component } from 'react'
import {url} from '../constants'
import ChatroomForm from './ChatroomForm'

export default class Chatroom extends Component {
    state = {
        messages: []
    }
    source = new EventSource (`${url}/stream`)


    componentDidMount() {
        console.log("componenDidMount of chatroom")
        this.source.onmessage = event => {
                console.log("Got a message!", event)
                // data comes from the console.log, finding data in browser
                const messages = JSON.parse(event.data)
                console.log(JSON.parse(event.data), "event data?")
                console.log(messages, "messages?")
                this.setState({messages
                })
        }
        console.log("source", this.source)
    }
    render() {
        console.log("local state", this.state)
        return (
            <div>
             <ul> 
             {
                 this.state.messages.map(message => <li key={message.id}> {message.message} </li>)
             }
             </ul>
             <ChatroomForm/>
            </div>
        )
    }
}
