const NavbarReducer = (state=1,action) => {
    if (action.type == 'SELECT_TAB'){
      return action.payload;
    }
    else{
        return state;
    }
}
export default NavbarReducer;
