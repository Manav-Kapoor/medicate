import React from 'react';
import {Link} from 'react-router-dom';
import {logout} from '../actions';
import logo from '../images/icon.png';
import profile from '../images/profile.png';
import './header.css';
import { connect } from 'react-redux';

class Header extends React.Component{
    openNav = () =>{
        var x =  window.matchMedia("(min-width:600px)");
        function shortScreen(x) {
            if (x.matches) {
              document.getElementById("main").classList.toggle('main-add');
            }
          }
        shortScreen(x)
        x.addListener(shortScreen)
        document.getElementById('mySidenav').classList.toggle('add');
        document.getElementById('header-container').classList.toggle('head-add');
    }
    closeNav = () =>{
        document.getElementById('mySidenav').classList.remove('add');
        document.getElementById("main").classList.remove('main-add');
        document.getElementById('header-container').classList.remove('head-add');
    }
    render(){
        console.log(this.props.signIn);
        if(this.props.signIn.isSignedIn){
            return(
                <div className="header-container" id="header-container">
                    <div className="header-title">Medicate</div>
                    <div className="header-collapse" onClick={this.openNav}>
                        <img className="logo" src={logo} alt="logo"/>
                    </div>
                    <div id="mySidenav" className="sidenav">
                        <a href="#" className="closebtn" onClick={this.closeNav}>&times;</a>
                        <div className="profile-div">
                            <div className="profile-img-div">
                                <img className="profile-img" src={profile} alt="profile"/>
                            </div>
                            <div className="profile-detail">
                                <Link to="/" className="profile-a" style={{textAlign: 'center'}}>{this.props.signIn.userName}</Link>
                                <Link to="/" className="profile-a" style={{height: '50px'}}>
                                    <button className="logout-btn" onClick={()=>this.props.logout()}>Logout</button>
                                </Link>
                            </div>
                        </div>
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/myappointments" className="nav-link">My Appointments</Link>
                        <Link to="/bookappointment" className="nav-link">Book Appointment</Link>
                        <Link to="/booktest" className="nav-link">Book Test</Link>
                        <Link to="#" className="nav-link" onClick={()=>{window.scrollTo(0, document.body.scrollHeight);}}>Contact Us</Link>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className="header-container" id="header-container">
                    <div className="header-title">Medicate</div>
                    <div className="header-collapse" onClick={this.openNav}>
                        <img className="logo" src={logo} alt="logo"/>
                    </div>
                    <div id="mySidenav" className="sidenav">
                        <a href="#" className="closebtn" onClick={this.closeNav}>&times;</a>
                        <div className="profile-div">
                            <div className="profile-img-div">
                                <img className="profile-img" src={profile} alt="profile"/>
                            </div>
                            <div className="buttons">
                                <Link to="/login"><button className="login-btn">Login</button></Link>
                                <Link to="/signup"><button className="signup-btn">Sign Up</button></Link>
                            </div>
                        </div>
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/bookappointment" className="nav-link">Book Appointment</Link>
                        <Link to="/booktest" className="nav-link">Book Test</Link>
                        <Link to="#" className="nav-link" onClick={()=>{window.scrollTo(0, document.body.scrollHeight);}}>Contact Us</Link>
                    </div>
                </div>
            );
        }
    }
}
const mapStateToProps = (state) =>{
    return{
        signIn: state.signIn
    }
}
const mapDispatchToProps = dispatch => {
    return{
        logout: ()=>{dispatch(logout())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);