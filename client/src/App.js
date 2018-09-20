import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isLogin: true,
      rooms: [],
      newRoom: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const {username, password} = this.state;
    this.setState({
      isLogin: false
    });
  }

  createRooms() {
    const {rooms} = this.state;
    let rooms_render = []
    for (let i=0; i<rooms.length; i++) {
      rooms_render.push(<option value={rooms[i]}>{rooms[i]}</option>)
    }
    return rooms_render;
  }

  createRoom() {
    const{newRoom, rooms} = this.state;
    let newRooms = [];
    for (let i=0; i<rooms.length; i++) {
      newRooms.push(rooms[i])
    }
    newRooms.push(newRoom);
    this.setState({rooms: newRooms});
  }

  render() {
    const {username, password, isLogin, rooms, newRoom} = this.state;

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
            <div className="room-action">Create Room</div>
            <input className="room-input" name="username" onChange={e => this.setState({newRoom: e.target.value})} value={this.state.newRoom} required type="text"></input>
            <a className="room-create" href='' onClick={this.createRoom.bind(this)}>Create</a>
            <div className="room-action">Delete Room</div><select>
              {this.createRooms()}
            </select>
            <div className="room-action">Start Temp Sensor</div>
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
