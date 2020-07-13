export const inputLocation = location => {
  return {
    type: 'INPUT_POSITION',
    payload: {
      latitude: location.latitude,
      longitude: location.longitude,
    },
  }
}
export const inputShop = shop => {
  return {
    type: 'INPUT_SHOP',
    payload: shop,
  }
}
export const inputPump = pump => {
  return {
    type: 'INPUT_PUMP',
    payload: pump,
  }
}
