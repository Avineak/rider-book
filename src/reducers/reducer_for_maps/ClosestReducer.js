const ClosestReducer = (state = { shop: null, pump: null }, action) => {
  if (action.type == 'SHOP') {
    return { ...state, shop: action.payload }
  }
  if (action.type == 'PUMP') {
    return { ...state, pump: action.payload }
  }
  return state
}
export default ClosestReducer
