import React from 'react';
import Nav from '../Nav';

function Header({ pageState, currentPage, navState }) {
	return (
		<>
			<header>
				<div>
					<h1>
						Gavin Asay
						<br />
						Web Developer, MERN Stack
					</h1>
				</div>
			</header>
			<Nav pageState={pageState} currentPage={currentPage} navState={navState} />
		</>
	);
}

export default Header;
