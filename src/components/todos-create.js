import React, { Component } from 'react'

class TodosCreate extends Component {

  handleCreate(event) {
    event.preventDefault()
    console.log(this.refs.createInput.value)

    const { createTask } = this.props
    createTask(this.refs.createInput.value)
    this.refs.createInput.value = ''
  }

  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="what do i need to do" ref="createInput"/>
        <button className="btn btn-primary">Create</button>
      </form>
    )
  }
}

export default TodosCreate
