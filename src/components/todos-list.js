import React, { Component } from 'react'

import TodosListHeader from './todos-list-header'
import TodosListItem from './todos-list-item'
import _ from './helpers'

class TodosList extends Component {

  renderItems() {
    const { todos } = this.props
    const props = _.omit(this.props, 'todos')

    return todos.map( (todo, index)=> {
      return <TodosListItem key={index} {...todo} {...props} />
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
