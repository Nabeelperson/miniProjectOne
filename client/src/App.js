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
  }

  render() {
    const {username, password} = this.state;
    const isLogin = false;
    if (isLogin) {
      return (
        isLogin && <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="main">
            <div className="main-body">
              <h1 className="main-title">Mini Project</h1><br></br>
              <h3 className="main-sub-title">Nabeel Younis and Brian Koh</h3>
            </div>
            <div className="login-container shadow">
              <div className="login-title">User Login</div>
              <label htmlFor="username" className="login-label">Username</label>
              <input className="login-input" name="username" onChange={e => this.setState({username: e.target.value})} value={this.state.username} required type="text"></input>
              <label htmlFor="password" className="login-label">Password</label>
              <input className="login-input" name="password" onChange={e => this.setState({password: e.target.value})} value={this.state.password} required type="Password"></input>
              <input type="Submit" className="button"></input>
              <a className="register-link" href='/Dashboard' >Register</a>
            </div>
          </div>
        </form>);
    } else {
      return (
        <div className="main">
          <div className="main-body">
            <h1 className="main-title">Dashboard</h1><br></br>
            <h3 className="main-sub-title">Nabeel Younis and Brian Koh</h3>
          </div>
          <div className="room-option-container">
            <div className="room-action">Create Room</div><select>
              <option value="volvo">Room 1</option>
              <option value="saab">Room 2</option>
              <option value="mercedes">Room 3</option>
              <option value="audi">Room 4</option>
            </select>
            <div className="room-action">Delete Room</div><select>
              <option value="volvo">Room 1</option>
              <option value="saab">Room 2</option>
              <option value="mercedes">Room 3</option>
              <option value="audi">Room 4</option>
            </select>
            <div className="room-action">Start Recording Temperature Sensor</div>
            <a className="room-action" href=''>Start</a>
          </div>
          <div className="room-container shadow">Room 1</div>
          <div className="room-container shadow">Room 2</div>
          <div className="room-container shadow">Room 3</div>
          <div className="room-container shadow">Room 4</div>
          <div className="room-container shadow">Room 5</div>
          <div className="room-container shadow">Room 6</div>
        </div>);
    }
  }
}

export default App;
