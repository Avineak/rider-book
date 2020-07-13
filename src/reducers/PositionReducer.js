const PositionReducer = (
  state = { latitude: null, longitude: null, shop: null, pump: null },
  action
) => {
  if (action.type == 'INPUT_POSITION') {
    return {
      ...state,
      latitude: action.payload.latitude,
      longitude: action.payload.longitude,
    }
  }
  if (action.type == 'INPUT_SHOP') {
    return { ...state, shop: action.payload }
  }
  if (action.type == 'INPUT_PUMP') {
    return { ...state, pump: action.payload }
  }
  return state
}
export default PositionReducer
