import React from 'react';
import Header from './Header';
import FormName from './FormName';
import Footer from './Footer';
import './Test.css';
import {Link} from 'react-router-dom';
import {addTest, removeTest, submitTestData, bookTest, emptyBookedTest} from '../actions';
import {connect} from 'react-redux';

class Test extends React.Component{
    displayTestList = () => {
        const testlist = this.props.testList.map((test, key)=>{
            const data = {
                testName: test.testName,
                cost: test.cost
            }
            return(
                <button type="button" className="hover" key={key} onClick={()=>{
                        this.props.addTest(data);
                    }}>
                    <div className="test">
                        <div>{test.testName}</div>
                        <span className="test-cost">Rs. {test.cost}</span>
                    </div>
                </button>
            );
        })
        return testlist;
    }
    displayBookedTest = () => {
        const bookedtestlist = this.props.bookedTest.map((test, key)=>{
            const data = {
                testName: test.testName,
                cost: test.cost
            }
            return(
                <div className="hover" key={key}>
                    <div className="test">
                        <div>{test.testName}</div>
                        <span className="test-cost">Rs.{test.cost}</span>
                        <button type="button" className="close" onClick={()=>{this.props.removeTest(data)}}>X</button>
                    </div>
                </div>
            );
        })
        return bookedtestlist;
    }
    calculateTotal = () => {
        var amount = 0;
        for(var i=0; i<this.props.bookedTest.length; i++){
            amount += this.props.bookedTest[i].cost;
        }
        return amount;
    }
    getFormData = () => {
        if(document.getElementById('name').value !== ""){
            if(document.getElementById('email').value !== ""){
                const name = document.getElementById('name').value;
                const address = document.getElementById('address').value;
                const email = document.getElementById('email').value;
                const test = this.props.bookedTest;
                const data = {
                    account: this.props.signIn.userName,
                    name,
                    email,
                    address,
                    test
                }
                this.props.submitTestData(data);
                //this.props.bookTest(data);
                this.props.emptyBookedTest();
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
        window.scrollTo(0,0);
        if(this.props.signIn.isSignedIn){
            return(
                <div id="main">
                    <Header />
                    <div className="container" style={{marginTop: '10px'}}>
                        <div className="test-head">
                            <p style={{margin: '0'}}>Want to book a test?</p> <span>A diagnostician will contact you to help.</span>
                        </div>
                        <div className="test-content">
                            <div className="test-list">
                                <div className="test-list-head">Available Tests</div>
                                <div className="display-test">{this.displayTestList()}</div>
                            </div>
                            <div className="booked-test">
                                <div className="test-list">
                                    <div className="test-list-head">Selected Tests</div>
                                    <div className="display-test">{this.displayBookedTest()}</div>
                                </div>
                                <div className="total">Total <span id="total">{this.calculateTotal()}</span></div>
                            </div>
                        </div>
                        <form className="form-horizontal" style={{width: '100%'}}>
                            <FormName />
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="address">Address:</label>
                                <div className="col-sm-12">
                                    <textarea className="form-control" rows="2" id="address" placeholder="Your Address Here"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="city">City</label>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" id="city" placeholder="Enter City" required></input>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-total">Total: <span id="total">{this.calculateTotal()}</span></div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12 col-sm-offset-2">
                                    <Link to="/">
                                        <button type="submit" className="btn btn-success" onClick={(e)=>{
                                            this.getFormData();}}>Submit</button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <Footer />
                </div>
            );
        }
        else{
            return(
                <div id="main">
                    <Header />
                    <div className="container list" style={{fontSize: '2vw'}}>Please Login to continue.</div>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        testList: state.testList,
        bookedTest: state.bookedTest,
        signIn: state.signIn
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addTest: (data) => {dispatch(addTest(data))},
        removeTest: (data) => {dispatch(removeTest(data))},
        submitTestData: (data) => {dispatch(submitTestData(data))},
        bookTest: (data) => {dispatch(bookTest(data))},
        emptyBookedTest: () => {dispatch(emptyBookedTest())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Test);