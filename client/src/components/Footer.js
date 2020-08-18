import React from 'react';
import './Footer.css';

class Footer extends React.Component{
    render(){
        return(
            <div className="footer-container">
                <div className="footer col-sm-4">
                    <p className="contact-head">Any Queries?</p>
                    <p className="contact-details">
                        <input type="text" placeholder="Enter your email" style={{borderRadius: '4px', border: 'none'}}></input>
                    </p>
                    <p style={{marginTop: '5px'}}><button className="btn btn-success">Submit</button></p>
                </div>
                <div className="footer col-sm-4">
                    <p className="contact-head">Contact Us</p>
                    <p className="contact-details">Phone No: <a href="#">+91-9876543210</a></p>
                    <p className="contact-details">Email: <a href="#">abc@example.com</a></p>
                </div>
                <div className="footer col-sm-4">
                    <p className="contact-head">Follow us on:</p>
                    <p className="contact-details"><a href="#">Facebook</a></p>
                    <p className="contact-details"><a href="#">Google</a></p>
                    <p className="contact-details"><a href="#">Twitter</a></p>
                </div>
            </div>
        );
    }
}

export default Footer;