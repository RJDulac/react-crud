import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {

      super();

      this.state = {
        todos: [{
          id: 1, name: 'Play Sims 4'
        }, {
          id: 2, name: 'Buy Some Clothes'
        }, {
          id: 3, name: 'Write Some code'
        }, {
          id: 4, name: 'Watch Tutorials'
        }]
      };
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Crud</h1>
        </header>

        <div className="container">
          <h2 className="text-center p4">Todos App</h2>
          <ul className="list-group">
            {this.state.todos.map((item) => {

              return <li key={item.id} className="list-group-item">{item.name}</li>
            })}

            </ul>
        </div>
      </div>
    );
  }
}

export default App;
