import React, { Component } from 'react'

class TodosListItem extends Component {

  constructor() {
    super()

    this.state = {
      isEditing: false
    }
  }

  editItem() {
    this.setState({
        isEditing: true
    })
  }

  cancelEditItem() {
    this.setState({
      isEditing: false
    })
  }

  saveEditItem(event) {
    event.preventDefault()

    const { saveTask } = this.props
    const oldTask = this.props.task
    const newTask = this.refs.editInput.value

    saveTask(oldTask, newTask)
    this.setState({
      isEditing: false
    })
  }

  renderTaskSection() {
    const { task, isCompleted, toggleTask } = this.props
    const { isEditing } = this.state
    const style = isCompleted ? 'completed' : 'notCompleted'

    if(isEditing) {
      return (
        <td>
          <form onSubmit={this.saveEditItem.bind(this)}>
            <input type="text" defaultValue={ task } ref="editInput"/>
          </form>
        </td>
      )
    }
    return <td className={ style }  onClick={toggleTask.bind(this, task)} > { task }  </td>
  }


  renderActionsSection() {
    const { isEditing } = this.state
    const { deleteTask, task } = this.props

    if(isEditing) return (
      <td>
        <button className="btn btn-primary" onClick={ this.saveEditItem.bind(this) } > Save  </button>
        <button className="btn btn-warning" onClick={ this.cancelEditItem.bind(this) } > Cancel  </button>
      </td>
    )

    return (
      <td>
        <button className="btn btn-info" onClick={ this.editItem.bind(this) } >  Edit  </button>
        <button className="btn btn-danger" onClick={ deleteTask.bind(this, task) } > Delete  </button>
      </td>
    )
  }

  render() {
    return (
      <tr>
        { this.renderTaskSection() }
        { this.renderActionsSection() }
      </tr>
    )
  }
}

export default TodosListItem
