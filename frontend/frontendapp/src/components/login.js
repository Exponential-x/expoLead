import React, { Component } from 'react';

export class login extends Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    login = event =>{
        console.log(this.state.credentials);
        fetch('http://127.0.0.1:8000/auth/',{ 
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.credentials)
        })
        .then( data => data.json())
        .then(
            data => {
                console.log(data.token);
            }
        )
        .catch( error => console.error(error))
    }

    register = event =>{
        console.log(this.state.credentials);
        fetch('http://127.0.0.1:8000/api/user/',{ 
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.credentials)
        })
        .then( data => data.json())
        .then(
            data => {
                console.log(data.token);
            }
        )
        .catch( error => console.error(error))
    }

    
    inputChanged= event=> {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
    }
    render() {
        return (
            <div>
                <h1> Login User </h1>
                <label>Username :
                    <input type='text' name="username" 
                    value={this.state.credentials.username}
                    onChange={this.inputChanged}
                    />
                </label><br/><br/>
                <label>Password :
                    <input type='password' name="password"
                    value={this.state.credentials.password}
                    onChange={this.inputChanged}/>
                </label><br/><br/>
                <button onClick={this.login}>Login</button>
                <button onClick={this.register}>Register</button>
                
            </div>
        )
    }
}

export default login;
