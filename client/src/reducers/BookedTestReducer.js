export default (state = [], action)=>{
    var check = false;
    var newState = [];
    switch(action.type){
        case 'ADD_TEST':
            for(var i=0;i<state.length; i++){
                if(state[i].testName === action.payload.testName){
                    check = true;
                }
            }
            if(check){
                return state;
            }else{
                return [...state, action.payload];
            }
        case 'REMOVE_TEST':
            newState = state.filter((el)=>{
                if(el.testName !== action.payload.testName){
                    return el;
                }
            });
            return newState;
        case 'EMPTY_BOOKED_TEST':
            return [];
        default:
            return state;
    }
}