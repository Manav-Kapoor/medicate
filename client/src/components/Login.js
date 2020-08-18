import React from 'react';
import './SignUpForm.css';
import {login} from '../actions';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Login extends React.Component{
    authenticate = () =>{
        var username = document.getElementById('name').value;
        var password = document.getElementById('password').value;
        var i;
        const data = {
            username,
            password
        }
        this.props.login(data);
        // for(i=0; i<this.props.accounts.length; i++){
        //     if(this.props.accounts[i].name === username){
        //         if(this.props.accounts[i].password === password){
        //             this.props.login(username);
        //         }
        //         else{
        //             alert('Username or Password is invalid.')
        //         }
        //     }
        // }
    }
    render(){
        return(
            <div className="background">
                <div className="loginForm">
                    <p className="login-form-head">Login</p>
                    <form className="login-form">
                        <div className="form-group">
                            <label className="control-label col-sm-4" htmlFor="name">Name</label>
                            <div className="col-sm-12">
                                <input type="text" className="form-control" id="name" placeholder="UserName" required></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-4" htmlFor="password">Password</label>
                            <div className="col-sm-12">
                                <input type="password" className="form-control" id="password" placeholder="Password" required></input>
                            </div>
                        </div>
                    </form>
                    <Link to='/'>
                        <div className="submit-btn-div"><button type="submit" onClick={this.authenticate} className="submit-btn">Login</button></div>
                    </Link>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        accounts: state.accounts
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        login: (username) => {dispatch(login(username))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);