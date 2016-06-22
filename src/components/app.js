require('styles/style.scss')
require('bootstrap/dist/css/bootstrap.css')

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

  toggleTask(task) {
    console.log(task)
  }

  render() {
    return (
      <div className="container">
        <h1 className="jumbotron"> Todo app meets React, Bootstrap and Webpack </h1>
        <TodosCreate  createTask={ this.createTask.bind(this) } />
        <TodosList  todos={ this.state.todos }  toggleTask={this.toggleTask.bind(this)} />
      </div>
    )
  }
}
