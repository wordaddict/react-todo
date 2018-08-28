import React, { Component } from 'react';

class Todo extends Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  handleButton(e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''})
  }
  handleChange(e) {
    const { value } = e.target;
    this.setState({newTodo: value})
  }

  removeTodo(i) {
    const todos = [...this.state.todos.slice(0, 1), this.state.todos.slice(i + 1)];
    this.setState({todos});
  }

  render() {
    return (
      <div className="App">
        <form>
          <input onChange={this.handleChange.bind(this)} value={this.state.newTodo} type="text" placeholder="new todo"/>
          <button onClick={this.handleButton.bind(this)}>Create Todo</button>
        </form>
        <ul>
          {this.state.todos.map((todo, i) => {
            return (
              <li key={todo} onClick={() => this.removeTodo.call(this, i)}>{todo}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Todo;
