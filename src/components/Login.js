import React, { Component } from 'react'
import * as request from 'superagent'
import {url} from '../constants'
import { connect } from 'react-redux';
import {login} from '../actions/actions'

class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    onChangeUsername = (event) => {
        console.log("change username")
        this.setState({
            username: event.target.value
        })
    }

    onChangePassword = (event) => {
        console.log("change password")
        this.setState({
            password: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        console.log("try to login w: ", this.state.username ,"and", this.state.password)
        request
        .post(`${url}/login`)
        .send({
            email: this.state.username,
            password: this.state.password
        })
        /// if we have sign-up, we should have a token, by doing
        /// .then - result.body, you see if you can get a token from 
        /// the database and thereby login 
        .then(result => {
            console.log("please let it be a token!", result.body)   
        this.props.login(result.body.jwt)
        }).catch(err => console.log(err))
    }

    
    render() {
        console.log("login done", this.props)
        /// if the jwt is there, the user is logged in!
        if(this.props.jwt !== "")
        return "You are logged in!"
        return (
            <div>
               <form onSubmit={this.onSubmit}>
               <input 
               name= "username"
               type= "text"
               onChange={this.onChangeUsername}
               value={this.state.username}
               placeholder="Login username"
               ></input>
               <input 
               name= "password"
               type= "password"
               onChange={this.onChangePassword}
               value={this.state.password}
               placeholder="password"
               ></input>
               <button type="submit"> Login</button>
               </form> 
            </div>
        )
    }
}

function mapStateToProps (reduxState) {
    console.log("mstp", reduxState)
    return {
        jwt: reduxState.user
    }
}


export default connect(mapStateToProps, { login })(Login)