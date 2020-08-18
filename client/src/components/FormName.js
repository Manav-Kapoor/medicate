import React from 'react';

class FormName extends React.Component{
    render(){
        return(
            <div>
                <div style={{fontSize: '24px'}}>Enter your details</div>
                <div className="form-group">
                    <label className="control-label col-sm-4" htmlFor="name">Full Name:</label>
                    <div className="col-sm-12">
                        <input type="text" className="form-control" id="name" placeholder="Enter Name" required></input>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-4" htmlFor="email">Email address:</label>
                    <div className="col-sm-12">
                        <input type="email" className="form-control" aria-describedby="emailHelp" id="email" placeholder="Enter email"></input>
                         <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                </div>
            </div>
        );
    }
}
export default FormName;