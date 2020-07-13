const TimerReducer = (state={switch: "off", minute:30, second:0}, action) => {
    if(action.type=="START_TIMER"){
        return {...state, switch:"on"};
    }
    if(action.type=="RESET_TIMER"){
        return {...state, switch: "off", minute:29, second: 59};
    }
    if(action.type=="DECREASE_TIME"){
        if(state.second==0){
            final = {...state};
            final.second = 59;
            final.minute--;
            return final;
        }
        final = {...state}
        final.second--;
        return final
    }
    return state;
}
export default TimerReducer;
