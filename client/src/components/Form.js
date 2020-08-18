import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FormName from './FormName';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {submit, bookAppointment, update} from '../actions';

class Form extends React.Component{
    getData(){
        if(document.getElementById('name').value !== ""){
            if(document.getElementById('email').value !== ""){
                const name = document.getElementById('name').value;
                const issue = document.getElementById('issue').value;
                const email = document.getElementById('email').value;
                const doctorName = this.props.data.name;
                const time = this.props.data.time;
                const speciality = this.props.data.speciality;
                const data = {
                    account: this.props.signIn.userName,
                    patientName: name,
                    issue,
                    doctorName,
                    time,
                    speciality
                }
                this.props.submit(data);
                this.props.update(data);
                this.props.bookAppointment(data);
                alert('Your appointment has been booked successfully.')
            }
            else{
                alert('Please enter your email address');
            }
        }
        else{
            alert('Please enter your details');
        }
    }
    render(){
        if(!this.props.data){
            return(
                <div className="col-sm-2">Not found</div>
            );
        }
        else{
            window.scrollTo(0,0);
            return(
                <div>
                    <Header />
                    <form className="form-horizontal" style={{maxWidth: '70%', margin: '0 auto', padding: '10px 0'}}>
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="doctor-name" style={{fontSize: '20px', marginTop: '10px'}}>Doctor's Name:</label>
                            <div className="col-sm-12" id="doctor-name">
                                {this.props.data.name}
                            </div>
                            <label className="control-label col-sm-2" htmlFor="doctor-time" style={{fontSize: '20px', marginTop: '10px'}}>Time:</label>
                            <div className="col-sm-12" id="doctor-name">
                                {this.props.data.time}
                            </div>
                        </div>
                        <FormName />
                        <div className="form-group">
                            <label className="control-label col-sm-2" htmlFor="issue">Issue:</label>
                            <div className="col-sm-12">
                                <textarea className="form-control" rows="3" id="issue" placeholder="Describe your issue here"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12 col-sm-offset-2">
                                <Link to="/">
                                    <button type="submit" className="btn btn-success" onClick={(e)=>{
                                        this.getData();}}>Submit</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                    <Footer />
                </div>
            );
        }
    }
}
const mapStateToProps = state => {
    return {
        signIn: state.signIn,
        data: state.userList[state.userList.length - 1],
    };
}
const mapDispatchToProps = dispatch =>{
    return{
        submit: (data) => {dispatch(submit(data))},
        bookAppointment: (data) => {dispatch(bookAppointment(data))},
        update: (data) => {dispatch(update(data))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);