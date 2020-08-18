import React from 'react';
import './Reservation.css';
import Header from './Header';
import {connect} from 'react-redux';

class Reservation extends React.Component{
    renderReservationList(){
        // return(
        //     this.props.submittedData.map((user)=>{
        //         if(user.name === this.props.signIn.userName){
        //             return user.bookedAppointments.map((appointment,key)=>{
        //                 return(
        //                     <div key={key} className="reservation">
        //                         <span style={{fontWeight: 'bold'}}>Doctor's Name:</span>{appointment.doctorName}
        //                         <div className="reservation-time">{appointment.time}</div>
        //                         <br />
        //                         <span className="reservation-speciality">
        //                             {appointment.speciality}
        //                         </span>
        //                         <div className="reservation-user-name"><span style={{fontWeight: 'bold'}}>Patient's Name:</span>{appointment.patientName}</div>
        //                         <hr />
        //                     </div>
        //                 );
        //             })
        //         }
        //     })
        // );
        return this.props.signIn.bookedAppointments.map((appointment,key)=>{
            return(
                <div key={key} className="reservation">
                    <span style={{fontWeight: 'bold'}}>Doctor's Name:</span>{appointment.doctorName}
                    <div className="reservation-time">{appointment.time}</div>
                    <br />
                    <span className="reservation-speciality">
                        {appointment.speciality}
                    </span>
                    <div className="reservation-user-name"><span style={{fontWeight: 'bold'}}>Patient's Name:</span>{appointment.patientName}</div>
                    <hr />
                </div>
            );
        });
    }
    render(){
        window.scrollTo(0,0);
        return(
            <div id="main">
                <Header />
                <div className="reservation-div">
                    <p className="reservation-head">Booked Appointments</p>
                    {this.renderReservationList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        signIn: state.signIn,
        submittedData: state.accounts
    }
}

export default connect(mapStateToProps)(Reservation);