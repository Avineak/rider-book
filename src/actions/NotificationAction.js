export const inputRepair = repairing => {
  return {
    type: 'REPAIRING',
    payload: repairing,
  }
}
export const inputFuel = fuel => {
  return {
    type: 'FUEL',
    payload: fuel,
  }
}
export const inputServicing = servicing => {
  return {
    type: 'SERVICING',
    payload: servicing,
  }
}
