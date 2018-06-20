import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {

      super();

      this.state = {
        newTodo: '',

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

handleChange = (event) => {
  // console.log(event.target.name, event.target.value);
  this.setState({
    newTodo: event.target.value

  });

  //two way binding if you don't use arrow function
  // this.handleChange = this.handleChange.bind(this);


}

addTodo = () => {
  const newTodo = {
    name: this.state.newTodo,
    //get the last id by subtracting and add the next id with + operator
    id: this.state.todos[this.state.todos.length -1].id + 1
  };

  const todos = this.state.todos;

  todos.push(newTodo);

  this.setState({
    todos: todos,
    //clear after clicking button
    newTodo: ''
  });
}

  render() {
    console.log(this.state.newTodo);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Crud</h1>
        </header>

        <div className="container">
          <input 
            type='text'
            name='todo' 
            className="form-control my-4"
            placeholder="Add a new todo"
            onChange={this.handleChange}
            value={this.state.newTodo}
          />
          <button
            onClick={this.addTodo}
            disabled={this.state.newTodo.length === 0} 
            className="btn-info mb-3 form-control">Add Todo</button>
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
