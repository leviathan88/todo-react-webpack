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

  render() {
    return (
      <div>
        <h1> Welcome to where time stands still </h1>
        <TodosCreate />
        <TodosList todos={this.state.todos}/>
      </div>
    )
  }
}
