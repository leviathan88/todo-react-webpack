import React, { Component } from 'react'

class TodosCreate extends Component {

  constructor() {
    super()

    this.state = {
      error: null
    }
  }

  handleCreate(event) {
    event.preventDefault()

    const task = this.refs.createInput.value
    const { createTask } = this.props
    const validateInput = this.validateInput(task)

    if (validateInput) {
      this.setState({
        error: validateInput
      })
      return
    }

    this.setState({error: null})
    createTask(task)
    this.refs.createInput.value = ''
  }

  validateInput(task) {
    const { alreadyExists } = this.props
    if(!task) return "Please enter a task!"
    if (alreadyExists(task)) return "Task already exists!"
    return null;
  }

  renderError() {
    const { error } = this.state
    if(error) {
      return <div  className="alert alert-warning" ><strong>{ error }</strong></div>
    }
  }

  render() {
    return (
      <form  onSubmit={this.handleCreate.bind(this)}>
        <div className="text-center lead">Create new todos</div>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="what do i need to do" ref="createInput"/>
        </div>
        <span><button className="btn btn-primary pull-right">Create</button></span>
        {this.renderError()}
      </form>
    )
  }
}

export default TodosCreate
