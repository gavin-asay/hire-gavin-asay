import React from 'react';
import Nav from '../Nav';

function Header({ pageState }) {
	return (
		<header>
			<div>
				<h1>
					Gavin Asay
					<br />
					Web Developer, MERN Stack
				</h1>
				<Nav pageState={pageState} />
			</div>
		</header>
	);
}

export default Header;
