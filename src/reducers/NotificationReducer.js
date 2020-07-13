const NotificationReducer = (
  state = { repair: null, fuel: null, servicing: null },
  action
) => {
  if (action.type == 'REPAIRING') {
    if (state.repair == null) {
      return { ...state, repair: action.payload }
    } else {
      return { ...state, repair: state.repair + action.payload }
    }
  }
  if (action.type == 'FUEL') {
    if (state.fuel == null) {
      return { ...state, fuel: action.payload }
    } else {
      return { ...state, fuel: state.fuel + action.payload }
    }
  }
  if (action.type == 'SERVICING') {
    if (state.servicing == null) {
      return { ...state, servicing: action.payload }
    } else {
      return { ...state, servicing: state.servicing + action.payload }
    }
  }
  return state
}
export default NotificationReducer
