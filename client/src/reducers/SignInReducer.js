const initialState = {
    isSignedIn: null,
    userName: null
};
export default (state=initialState, action) => {
    var newState = {};
    switch(action.type){
        case 'SIGN_IN':
            newState = {
                isSignedIn: true,
                userName: action.payload.name,
                bookedAppointments: action.payload.bookedAppointments,
                bookedTest: action.payload.bookedTest
            }
            return newState;
        case 'SIGN_OUT':
            newState = {
                isSignedIn: false,
                userName: null
            }
            return newState
        case 'UPDATE':
            return {
                ...state,
                bookedAppointments: [...state.bookedAppointments, action.payload]
            }
        default: 
            return state;
    }
}