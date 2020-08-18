import {combineReducers} from 'redux';
import doctorListReducer from './doctorListReducer';
import userListReducer from './userListReducer';
import submitReducer from './Submit';
import SubmitTestReducer from './SubmitTestReducer';
import AccountsReducer from './AccountsReducer';
import SignInReducer from './SignInReducer';
import TestListReducer from './TestListReducer';
import BookedTestReducer from './BookedTestReducer';

export default combineReducers({
    accounts: AccountsReducer,
    signIn: SignInReducer,
    doctorList: doctorListReducer,
    userList: userListReducer,
    bookedAppointments: submitReducer,
    testList: TestListReducer,
    bookedTest: BookedTestReducer,
    userBookedTest: SubmitTestReducer
})