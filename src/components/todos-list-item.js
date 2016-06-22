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

  renderActionsSection() {
    const { isEditing } = this.state

    if(isEditing) return (
      <td>
        <button>Save</button>
        <button onClick={this.cancelEditItem.bind(this)}>Cancel</button>
      </td>
    )

    return (
      <td>
        <button onClick={this.editItem.bind(this)}>Edit</button>
        <button>Delete</button>
      </td>
    )
  }

  render() {
    return (
      <tr>
        <td>{ this.props.task }</td>
        {this.renderActionsSection()}
      </tr>
    )
  }
}

export default TodosListItem
