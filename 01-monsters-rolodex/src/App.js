import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters : [
        {
          id: '1',
          name: 'Jack'
        },
        {
          id: '2',
          name: 'Joan'
        },
        {
          id: '3',
          name: 'Abigail'
        },
        {
          id: '4',
          name: 'Linda'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <h1 key={ monster.id }>{ monster.name }</h1>
          })
        }
      </div>
    );
  }
}

export default App;
