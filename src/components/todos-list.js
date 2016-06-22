import React, { Component } from 'react'

import TodosListHeader from './todos-list-header'

class TodosList extends Component {

  renderItems() {
    const { todos } = this.props

    return todos.map( (todo, index)=> {
      <TodosListItem key={index} {...todo} />
    })
  }

  render() {
    return (
      <table>
        <TodosListHeader />
      </table>
    )
  }
}

export default TodosList
