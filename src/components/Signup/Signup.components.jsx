import React, { Component } from "react";

import {Link} from 'react-router-dom';

export default class SignUp extends Component {
    render() {
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" required/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" required/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" required/> 
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"required/> 
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/">sign in?</a>
                </p>
                </form>
                <div classname='btn' align="center" >
                <Link to='/homepage'>
          <button 
          type="button" 
          class="btn btn-outline-primary mr-1">Sign in</button>
                </Link>
                
            
            </div>
            </div>
            </div>
        );
    }
}