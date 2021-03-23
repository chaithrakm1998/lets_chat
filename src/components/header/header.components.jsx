import React from 'react';
import { Link } from 'react-router-dom';
import About from '../../pages/about/About'

import { ReactComponent as Logo } from '../../assets/connect.svg';

import './header.styles.scss';

export default function Header(){
  return(

    <div className='header'>
    
    <Link className='logo-container' to='/homepage'> 
      <Logo className='logo' /> 
      
    </Link>
    
    <div className='options'>
      <Link className='option'  to='/'>
        SIGN OUT
      </Link>
      <Link className='option' to='/about'>
        ABOUT
      </Link>
      
        </div>
      
  </div>
  )
  
  
};
    
  




