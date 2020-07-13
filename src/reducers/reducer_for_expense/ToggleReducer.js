const ToggleReducer = (
  state = {
    fuelStatus: false,
    servicingStatus: false,
    repairStatus: false,
  },
  action
) => {
  temp = { ...state }
  if (action.type == 'TOGGLE_FUEL') {
    temp.fuelStatus = !temp.fuelStatus
    return temp
  }
  if (action.type == 'TOGGLE_SERVICING') {
    temp.servicingStatus = !temp.servicingStatus
    return temp
  }
  if (action.type == 'TOGGLE_REPAIR') {
    temp.repairStatus = !temp.repairStatus
    return temp
  }
  return state
}
export default ToggleReducer
