const RepairworklistReducer = (state = [], action) => {
  if (action.type == 'ADD_REPAIR') {
    return [...state, action.payload]
  }
  if (action.type == 'REMOVE_REPAIR') {
    return state.filter(item => item.id != action.payload)
  }
  return state
}
export default RepairworklistReducer
