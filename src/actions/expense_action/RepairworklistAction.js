export const RepairworklistAction = () => {
  return {
    type: 'sonmon',
  }
}
export const addRepair = newRepair => {
  return {
    type: 'ADD_REPAIR',
    payload: newRepair,
  }
}
export const removeRepair = id => {
  return {
    type: 'REMOVE_REPAIR',
    payload: id,
  }
}
