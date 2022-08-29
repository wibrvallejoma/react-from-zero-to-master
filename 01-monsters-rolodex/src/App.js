import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {
        firstName: 'Jose',
        lastName: 'Rodriguez'
      },
      company: 'Company name'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi, { this.state.name.firstName }, { this.state.name.lastName } <br></br>
            I work at { this.state.company }
          </p>
          <button
            onClick={() => {
              // Set state could have 2 arguments. A function and a callback.
              // To get a more sync behavior instead of async.
              this.setState((state, props) => {
                // Function
                return {
                  name: { firstName: 'UFirstName', lastName: 'ULastName' }
                }
              }, () => {
                // Callback when function is done.
                console.log(this.state);
              });
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
