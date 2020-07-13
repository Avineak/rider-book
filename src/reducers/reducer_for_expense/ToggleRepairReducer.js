const ToggleRepairReducer = (state=false, action) => {
    if(action.type=="TOGGLE_REPAIR"){
        return !state;
    }
    return state;
}
export default ToggleRepairReducer;
