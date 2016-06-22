import React, { Component } from 'react'

import TodosCreate from './todos-create'
import TodosList from './todos-list'

const todos = [
  {
    task: 'say mom you love her',
    isCompleted: true
  },
  {
    task: 'watch Euro 2016',
    isCompleted: false
  },
  {
    task: 'buy yourself more money',
    isCompleted: false
  }
]

export default class App extends Component {

  constructor() {
    super()

    this.state = {
      todos: todos
    }
  }

  createTask(task) {
    this.state.todos.push({
      task: task,
      isCompleted: false
    })
    this.setState({
      todos: this.state.todos
    })
  }

  render() {
    return (
      <div>
        <h1> Welcome to where time stands still </h1>
        <TodosCreate  createTask={this.createTask.bind(this)} />
        <TodosList  todos={this.state.todos} />
      </div>
    )
  }
}
