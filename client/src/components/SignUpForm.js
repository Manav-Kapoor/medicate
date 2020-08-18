import React from 'react';
import FormName from './FormName';
import './SignUpForm.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {addAccount, login} from '../actions';

class SignUpForm extends React.Component{
    getData = () =>{
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var contact = document.getElementById('contact').value;
        const data = {
            name,
            email,
            password,
            contact,
            bookedAppointments: [],
            bookedTest: []
        }
        if(name === "" || name=== ' '){
            alert('Please enter your name.')
        }
        else if(email === "" || email === ' ' || !email.includes('@') || email.split('@').length-1 !== 1 || email[0] === '@' 
        || email[email.length-1] === '@'){
            alert('Please enter a valid email address.')
        }
        else if(password.length < 8 || password.length > 32){
            alert('Password must be 8 to 32 characters long.')
        }
        else if(contact.length !== 10){
            alert('Contact No. invalid.')
        }
        else{
            this.props.addAccount(data);
            // this.props.login(name); removed as dispatching action while creating account
        }
    }
    render(){
        return(
            <div className="background">
                <div className="signUpForm">
                    <p className="signUp-form-head">Sign Up</p>
                    <form className="signUp-form">
                        <FormName />
                        <div className="form-group">
                            <label className="control-label col-sm-4" htmlFor="password">Password</label>
                            <div className="col-sm-12">
                                <input type="password" className="form-control" id="password" placeholder="Password" required></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-4" htmlFor="contact">Contact No.</label>
                            <div className="col-sm-12">
                                <input type="text" className="form-control" id="contact" placeholder="Contact No." required></input>
                            </div>
                        </div>
                    </form>
                    <Link to='/'>
                        <div className="submit-btn-div"><button type="submit" onClick={this.getData} className="submit-btn">Create Account</button></div>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addAccount: (data) => {dispatch(addAccount(data))},
        login: (user) => {dispatch(login(user))}
    }
}

export default connect(null, mapDispatchToProps)(SignUpForm);