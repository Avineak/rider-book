import { Ac } from ''
const PriceReducer = (
  state = { repairCost: 0, servicingCost: 0, fuelCost: 0 },
  action
) => {
  if (action.type == 'ADD_REPAIR_PRICE') {
    return { ...state, repairCost: state.repairCost + action.payload }
  }
  if (action.type == 'ADD_SERVICING_PRICE') {
    return { ...state, servicingCost: state.servicingCost + action.payload }
  }
  if (action.type == 'ADD_FUEL_PRICE') {
    return { ...state, fuelCost: state.fuelCost + action.payload }
  }
  return state
}
export default PriceReducer
