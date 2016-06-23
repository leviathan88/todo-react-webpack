import React, { Component } from 'react'

import TodosListHeader from './todos-list-header'
import TodosListItem from './todos-list-item'

class TodosList extends Component {

  renderItems() {
    const { todos } = this.props
    /*let methods = this.props.map()
    console.log(methods);*/

    return todos.map( (todo, index)=> {
      return <TodosListItem key={index} {...todo} {...this.props} />
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
