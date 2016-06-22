import React, { Component } from 'react';

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
  render() {
    return (
      <div>Welcome to where time stands still</div>
    )
  }
}
