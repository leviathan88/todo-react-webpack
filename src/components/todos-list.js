import React, { Component } from 'react'

import TodosListHeader from './todos-list-header'
import TodosListItem from './todos-list-item'

class TodosList extends Component {

  renderItems() {
    const { todos } = this.props   

    return todos.map( (todo, index)=> {
      return <TodosListItem key={index} {...todo} />
    })
  }

  render() {
    return (
      <table>
        <TodosListHeader />
        <tbody>
          { this.renderItems() }
        </tbody>
      </table>
    )
  }
}

export default TodosList
