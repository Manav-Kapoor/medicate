import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Reservation from './Reservation';
import SignUpForm from './SignUpForm';
import Login from './Login';
import DoctorList from './DoctorList';
import Test from './Test';
import Home from './Home';
import Form from './Form';
import './App.css';
import {getAppointment} from '../actions';
import {connect} from 'react-redux';

class App extends React.Component{
    componentDidMount(){
        this.props.getAppointment();
    }
    render(){
        return(
            <BrowserRouter>
                <Route path='/' exact component={Home}/>
                <Route path='/bookappointment' component={DoctorList}/>
                <Route path='/myappointments' component={Reservation}/>
                <Route path='/signup' component={SignUpForm} />
                <Route path='/login' component={Login} />
                <Route path='/booktest' component={Test}/>
                <Route path='/form' component={Form}/>
            </BrowserRouter>
        );
    }
}
export default connect(null, {getAppointment})(App);