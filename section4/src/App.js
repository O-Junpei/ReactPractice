import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { title: 'デフォルトTODO',
          id: 0 }
      ],
      uniqueID: 1,
    };
    this.addTodo = this.addTodo.bind(this);
    this.resetTodo = this.resetTodo.bind(this);
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

  resetTodo() {
    this.setState(
      {
        tasks: []
      }
    );
  }

  render() {
    return (
      <div className="App">
        <h1>TODO App</h1>
        <button onClick={this.resetTodo}>リセット</button>
        <TodoInput addTodo={this.addTodo}/>
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
