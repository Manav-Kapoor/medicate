import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Home.css';
import {Link} from 'react-router-dom';

class Home extends React.Component{
    componentDidMount(){
        var i = 0;
        var txt = 'Joining hands for well being of people around us.';
        var speed = 50;

        function typeWriter() {
            if (i < txt.length) {
                document.getElementById("front-content").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
    }
    render(){
        window.scrollTo(0,0);
        return(
            <div id="main">
                <div className="jumbo">
                    <Header />
                    <div className="welcome">
                        Welcome To Medicate!
                    </div>
                    <div id="front-content">

                    </div>
                </div>
                <div className="about-container">
                    <div className="about-head">About Us</div>
                    <div className="about">
                    Medicate aims at connecting people by providing them with every piece of information they need to secure themselves and their family’s well-being.
                     Assessing health issues, consulting experienced medical practitioners and storing health records are few services offered by the company.
                    Not only are we dedicated to providing a better health to people, we also ensure that they get easy access to country’s best doctors in the most convenient and affordable ways.
                     On our way to creating an experience truly prime for users and healthcare experts, we overcome multitudinous challenges almost every day.
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Home;