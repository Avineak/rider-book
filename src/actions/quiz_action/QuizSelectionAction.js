export const QuizSelectionAction = (selection) => {
    return {
        type: "SELECT_QUIZ",
        payload: selection
    };
}
export const IncreaseQuiz = () => {
    return {
        type: "INCREASE_QUIZ"};
} 
