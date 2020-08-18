const accounts = [];
export default (state = accounts, action)=>{
    switch(action.type){
        case 'ADD_ACCOUNT':
            return [...state, action.payload];
        case 'SUBMIT':
            if(state.length){
                var i;
                for(i=0;i<state.length;i++){
                    if(state[i].name===action.payload.account){
                        state[i]={
                            ...state[i],
                            bookedAppointments: [...state[i].bookedAppointments,action.payload]
                        }
                    }
                }
                return state;
            }
            else{
                return state;
            }
        case 'SUBMIT_TEST_DATA':
            if(state.length){
                var j;
                for(j=0;j<state.length;j++){
                    if(state[j].name===action.payload.account){
                        state[j]={
                            ...state[j],
                            bookedTest: [...state[j].bookedTest,action.payload]
                        }
                    }
                }
                return state;
            }
            else{
                return state;
            }
        default:
            return state;
    }
}