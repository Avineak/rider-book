export const SelectionAction = (option) => {
    return {
        type: "SELECT_OPTION",
        payload: option
    }
}
export const ResetAction = () => {
    return {
        type:"RESET_OPTION"
    }
}
