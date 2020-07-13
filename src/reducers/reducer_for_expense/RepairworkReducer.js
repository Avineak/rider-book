const RepairworkReducer = (
  state = {
    id: '',
    work: '',
    cost: '',
    workshop: '',
    location: '',
    date: '',
    time: '',
    icon: '',
  },
  action
) => {
  temp = { ...state }
  switch (action.type) {
    case 'INPUT_WORK':
      temp.work = action.payload
      return temp
    case 'INPUT_COST':
      temp.cost = action.payload
      return temp
    case 'INPUT_WORKSHOP':
      temp.workshop = action.payload
      return temp
    case 'INPUT_LOCATION':
      temp.location = action.payload
      return temp
    case 'INPUT_DATE':
      temp.date = action.payload
      return temp
    case 'INPUT_TIME':
      temp.time = action.payload
      return temp
    case 'INPUT_ICON':
      temp.icon = action.payload
      return temp
    case 'INPUT_ID':
      temp.id = action.payload
      return temp
    case 'RESET':
      return {
        id: '',
        work: '',
        cost: '',
        workshop: '',
        location: '',
        date: '',
        time: '',
        icon: '',
      }
    default:
      return state
  }
}

export default RepairworkReducer
