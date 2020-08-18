import React from 'react';
import './DoctorList.css';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {userSubmit} from '../actions';

class DoctorList extends React.Component{
    displayList = () => {
        //convert object into array(this method should be used as it does not use memory)
        const response = Object.values(this.props.doctorList).map((element)=>{
            const Time = element.availableTime.map((time)=>{
                const doctor = {
                    time,
                    name: element.name,
                    speciality: element.speciality,
                    key: element.key
                }
                return(
                    <div key={time} className={`flex-item ${this.props.bookedAppointments && this.props.bookedAppointments.filter(x=> {return x.doctorName === doctor.name && x.time === time}).length?'dsb' :''}`}>
                        <Link to="/form">
                            <button type="button" className='btn btn-outline-primary' style={{minWidth: '70px'}} onClick={()=>{
                                this.props.userSubmit(doctor);
                            }}>
                                {time}
                            </button>
                        </Link>
                    </div>
                );
            });
            return(
                <div key={element.key}>
                    <div className="content">
                        <p className="name">{element.name}</p>
                        <span className="speciality">{element.speciality}</span>
                    </div>
                    <div className="container">
                        {Time}
                    </div>
                </div>
            );
        });
        return response;
    }
    render(){
        window.scrollTo(0,0);
        if(this.props.signIn.isSignedIn){
            return(
                <div id="main">
                    <Header />
                    <div className="container list">{this.displayList()}</div>
                    <Footer />
                </div>
            );
        }else{
            return(
                <div id="main">
                    <Header />
                    <div className="container list" style={{fontSize: '2vw'}}>Please Login to continue.</div>
                </div>
            );
        }
    }
}

const matchStateToProps = (state) =>{
    return {
        signIn: state.signIn,
        doctorList: state.doctorList,
        bookedAppointments: state.bookedAppointments
    };
}
const mapDispatchToProps = dispatch => {
    return {
        userSubmit: (element) => dispatch(userSubmit(element))
    }
}

export default connect(matchStateToProps,mapDispatchToProps)(DoctorList);