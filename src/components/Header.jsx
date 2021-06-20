import React from 'react';

import logo from '../logo.svg';

export const Header = () => {
	return (
		<nav className='grey darken-2'>
			<div className='nav-wrapper'>
				<div className='brand-logo'>
					<img src={logo} className='App-logo' alt='logo' /> Shop
				</div>
				<ul id='nav-mobile' className='right hide-on-med-and-down'>
					<li>
						<a href='!#'>GitHub</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};
