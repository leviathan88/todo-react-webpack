export default function omit(props, filter) {
  const filteredProps = {}
  for (let prop in props)
    if (props.hasOwnProperty(prop))
      if(prop!==filter)
        filteredProps[prop]=props[prop]
  return filteredProps
}
