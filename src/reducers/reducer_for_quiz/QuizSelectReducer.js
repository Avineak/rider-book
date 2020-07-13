const QuizSelectReducer = (state=0, action) => {
    if(action.type=='SELECT_QUIZ'){
        return action.payload;
    }   
    if(action.type=="INCREASE_QUIZ")
    {
        return state+1;
    }
    return state;
}
export default QuizSelectReducer;
