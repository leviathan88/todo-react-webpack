import React, { Component } from 'react';

class TodosList extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
      </table>
    )
  }
}

export default TodosList;
