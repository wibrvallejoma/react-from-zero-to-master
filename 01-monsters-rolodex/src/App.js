import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      userName: 'User name'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi, { this.state.userName }</p>
          <button
            onClick={() => {
              this.setState({userName: 'Will :D'})
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
