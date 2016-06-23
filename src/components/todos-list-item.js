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

  renderTaskSection() {
    const { task, isCompleted, toggleTask } = this.props
    const style = isCompleted ? 'completed' : 'notCompleted'

    return <td className={ style }  onClick={toggleTask.bind(this, task)} > { task }  </td>
  }

  renderActionsSection() {
    const { isEditing } = this.state

    if(isEditing) return (
      <td>
        <button className="btn btn-primary">Save</button>
        <button className="btn btn-warning" onClick={ this.cancelEditItem.bind(this)  } > Cancel  </button>
      </td>
    )

    return (
      <td>
        <button className="btn btn-info" onClick={  this.editItem.bind(this)  } >  Edit  </button>
        <button className="btn btn-danger" >Delete</button>
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
