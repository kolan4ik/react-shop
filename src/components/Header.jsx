import React from 'react';

import logo from '../logo.svg';

export const Header = () => {
  return (
    <nav className='grey darken-3'>
      <div className='nav-wrapper'>
        <div className='brand-logo'>
          <img src={logo} className='App-logo' alt='logo' /> Shop
        </div>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/kolan4ik/react-shop'>
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
