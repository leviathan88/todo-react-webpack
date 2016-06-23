class Helpers {

  static omit(props, filter) {
    const filteredProps = {}
    for (let prop in props)
      if (props.hasOwnProperty(prop))
        if(prop!==filter)
          filteredProps[prop]=props[prop]
    return filteredProps
  }

  static delete(list, item) {
    const filteredList = {}
    console.log(list)
    console.log(item)
  }


}

export default Helpers;
