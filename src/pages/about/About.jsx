import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/connect.svg';
export default function About(){
    return(
        <div>
            
        <div className='header'>
    
    <Link className='logo-container' to='/homepage'> 
      <Logo className='logo' /> 
      
    </Link>
    
    <div className='options'>
      <Link className='option' to='/'>
        SIGN OUT
      </Link>
      </div>
        </div>
        
        <div>
        <div className="contents">ABOUT</div>
        <div className="content">Hello..!!!</div>
        </div>
        </div>
    )
}