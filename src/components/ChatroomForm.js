import React, { Component } from 'react'
import * as request from 'superagent'
import {url} from '../constants'

export default class ChatroomForm extends Component {
state = {
    message: ""
}    
onChange = event => {
    console.log("on change")
    this.setState({
        message: event.target.value
    })
}
onSubmit = (event) => {
    event.preventDefault()
    /// preventdefault is to refresh the page, we don't want that so therefore putting in this
    console.log("onSubmit of chatroom form")
    request.post(`${url}/message`)
    .send({message: this.state.message})
    .catch(error => console.log("got an error!", error))
}

    render() {
        console.log("render of chatroom form", this.state)
        return (
            <div>
            <form onSubmit={this.onSubmit}>
            <input 
            name="messageForm" 
            type="text"
            onChange={this.onChange}
            value={this.state.message}
            placeholder="Your-Message-Here"
            ></input>
            <button type="submit">Send message </button>
            </form>
            </div>
        )
    }
}
