import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { title: 'デフォルトTODO', id: 0,},
      ],
      uniqueID: 1,
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(title) {
    const {
      tasks,
      uniqueID,
    } = this.state

    tasks.push({
      title,
      id: uniqueID,
    });

    this.setState(
      {
        tasks,
        uniqueID: uniqueID + 1,
      });
  }

  render() {
    const tasks = [
      { title: 'Todo1つ目', id: 0 },
      { title: 'Todo2つ目', id: 1 },
    ];
    return (
      <div>
        <h1>TODO App</h1>
        <TodoInput addTodo={this.addTodo}/>
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
