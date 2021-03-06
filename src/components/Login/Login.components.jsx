import React, { Component } from "react";
import { auth, signInWithGoogle,signInWithFacebook} from '../../firebase/firebase.utils';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Link} from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: '',
          password: ''
        };
      }
    
      
    render() {
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
            <div className='sign-in'>
            <form >
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" 
            value={this.state.email} className="form-control" placeholder="Enter email" required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={this.state.password}
             className="form-control" placeholder="Enter password" required />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                
                <p className="forgot-password text-right">
                    Don't have an account? <a href="/sign-up">Sign Up?</a>
                </p>
                <div classname='btn' align="center" >
                <Link to='/homepage'>
          <button 
          type="button" 
          class="btn btn-outline-primary mr-1">Sign in</button>
                </Link>
                <Link to="/homepage">
                <button type="button" class="btn btn-outline-primary mr-1" onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google</button>
                </Link>
                
                <Link to="/homepage">
                <button type="button" class="btn btn-outline-primary mr-1" onClick={signInWithFacebook} isFacebookSignIn> Sign in with Facebook</button>
                </Link>
      
          </div>
        </form>
      </div>
            
            </div>
          </div>
           
        );
    }
}