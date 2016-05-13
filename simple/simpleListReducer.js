const simpleListApp = (state = 'hello', action) => {

  switch (action.type) {
    case 'SHOW_ALL':
      return state
    case 'HIDE_ALL':
      return state
    default:
      return state
  }
}

export default simpleListApp
