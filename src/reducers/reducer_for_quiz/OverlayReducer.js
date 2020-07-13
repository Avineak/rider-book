const OverlayReducer = (state=false,action) => {
    if(action.type=='TOGGLE_OVERLAY'){
        return !state;
    }
    else{
        return state;
    }
}
export default OverlayReducer;
