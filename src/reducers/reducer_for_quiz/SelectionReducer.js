const SelectionReducer = (state=null,action) => {
    if (action.type == 'SELECT_OPTION'){
      return action.payload;
    }
    if (action.type == 'RESET_OPTION'){
        return null;
    }
        return state;
}
export default SelectionReducer;
