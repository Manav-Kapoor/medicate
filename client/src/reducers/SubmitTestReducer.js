export default (state=[], action) => {
    switch(action.type){
        case 'BOOK_TEST':
            return [...state, action.payload];
        default:
            return state;
    }
}