import Header from '../Header/Header';
import React, { Component } from 'react';


class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: ''
        }
    }
    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleSubmit = event => {
       
            event.preventDefault()
          
          this.props.onSubmit(this.state.username)
    
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange}></input>
                    <button type='submit'>Submit</button>
                </form>

            </div>
        );
    }
}

export default Login;