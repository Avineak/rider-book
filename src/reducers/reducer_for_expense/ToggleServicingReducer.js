const ToggleServicingReducer = (state=false, action) => {
    if (action.type=="TOGGLE_SERVICING"){
        return !state;
    }
    return state;
}
export default ToggleServicingReducer;
