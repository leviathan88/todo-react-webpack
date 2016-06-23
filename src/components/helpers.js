class Helpers {

  static omit(props, filter) {
    const filteredProps = {}
    for (let prop in props)
      if (props.hasOwnProperty(prop))
        if(prop!==filter)
          filteredProps[prop]=props[prop]
    return filteredProps
  }

  static delete(todos, taskToDelete) {
    return todos.filter(todo=>todo.task!==taskToDelete)
  }


}

export default Helpers;
