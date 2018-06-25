import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {

      super();

      this.state = {
        newTodo: '',

        editing: false,

        editingIndex: null,

        todos: [{
          id: 1, name: 'Play Sims 4'
        }, {
          id: 2, name: 'Buy Some Clothes'
        }, {
          id: 3, name: 'Write Some code'
        }, {
          id: 4, name: 'Watch Tutorials'
        }],
        date: new Date()
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

generateTodoId = () => {
  const lastTodo = this.state.todos[this.state.todos.length -1];
  if(lastTodo) {
    return lastTodo.id +1;
  }
  return 1;
}

addTodo = () => {
  const newTodo = {
    name: this.state.newTodo,
    //get the last id by subtracting and add the next id with + operator
    id: this.generateTodoId()
  };

  const todos = this.state.todos;

  todos.push(newTodo);

  this.setState({
    todos: todos,
    //clear after clicking button
    newTodo: ''
  });
}

deleteTodo = (index) => {
  const todos = this.state.todos;
  delete todos[index];

 this.setState({ todos })

}

editTodo = (index) => {
  const todo = this.state.todos[index];
  this.setState({
    editing: true,
    newTodo: todo.name,
    editingIndex: index
  });

}

updateTodo = () => {
  const todo = this.state.todos[this.state.editingIndex];

  todo.name = this.state.newTodo;

  const todos = this.state.todos;
  todos[this.state.editingIndex] = todo;
  this.setState({ 
    todos, 
    editing: false, 
    editingIndex: null, 
    newTodo: '' 
  });

}



  render() {
    console.log(this.state.newTodo);
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.date.toLocaleTimeString()}</h1>
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
            onClick={this.state.editing ? this.updateTodo : this.addTodo}
            disabled={this.state.newTodo.length === 0} 
            className="btn-info mb-3 form-control">
            {this.state.editing ? 'Update Todo' : 'Add Todo'}
            </button>
            {
              !this.state.editing && 
                        <ul className="list-group">
            {this.state.todos.map((item, index) => {

              return <li key={item.id} className="list-group-item">
                <button 
                className="btn-sm mr-4 btn btn-info"
                onClick={() => { this.editTodo(index); }}
                >U</button>

                {item.name}
                <button 
                className="btn-sm ml-4 btn btn-danger"
                onClick={() => { this.deleteTodo(index); }}
                >X</button>

                </li>;
            })}

            </ul>
            }

        </div>
      </div>
    );
  }
}

export default App;
