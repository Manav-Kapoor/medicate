//userList reducer
export default (state = [], action) =>{
    if(action.type === 'USER_SUBMIT'){
        return [...state, action.payload];
    }
    return state;
}