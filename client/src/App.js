import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const {username, password} = this.state;
    console.log(username, password);
  }

  render() {
    const {username, password} = this.state;
    console.log(username);
    console.log(password);
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="main">
          <div className="main-body">
            <h1 className="main-title">Mini Project</h1>
          </div>
          <div className="login-container shadow">
            <div className="login-title">User Login</div>
            <label htmlFor="username" className="login-label">Username</label>
            <input className="login-input" name="username" onChange={e => this.setState({username: e.target.value})} value={this.state.username} required type="text"></input>
            <label htmlFor="password" className="login-label">Password</label>
            <input className="login-input" name="password" onChange={e => this.setState({password: e.target.value})} value={this.state.password} required type="Password"></input>
            <input type="Submit" className="button"></input>
            <a className="register-link" href=''>Register</a>
          </div>
        </div>
      </form>
    );
  }
}

export default App;
