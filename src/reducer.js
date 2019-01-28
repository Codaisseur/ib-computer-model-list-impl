const reducer = (state = [], action = {}) => {
    switch (action.type) {
    case "ADD_MODEL":
      return state.concat(action.payload)
    default:
      return state
    }
  }
  
  export default reducer