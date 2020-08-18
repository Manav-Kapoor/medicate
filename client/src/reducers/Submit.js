export default (state=[], action) => {
    switch(action.type){
        case 'BOOK_APPOINTMENT':
            return [...state, ...action.payload];
        default:
            return state;
    }
}