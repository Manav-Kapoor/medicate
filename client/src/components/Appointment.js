import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Reservation from './Reservation';

class Appointment extends React.Component{
    render(){
        window.scrollTo(0,0);
        return(
            <div id="main">
                <Header />
                <div className="outer-box" style={{maxWidth: '75%', margin: 'auto'}}>
                    <Reservation />
                </div>
                <Footer />
            </div>
        );
    }
}
export default Appointment;