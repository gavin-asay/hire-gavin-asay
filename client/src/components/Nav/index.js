import React from 'react';

function Nav({ pageState, navState }) {
	return (
		<nav>
			<ul>
				<li className={navState === 'About' ? 'current' : undefined}>
					<a href='#home' id='About' onClick={() => pageState('About')}>
						Home
					</a>
				</li>
				<li className={navState === 'Portfolio' ? 'current' : undefined}>
					<a href='#portfolio' id='Portfolio' onClick={() => pageState('Portfolio')}>
						Portfolio
					</a>
				</li>
				<li className={navState === 'Contact' ? 'current' : undefined}>
					<a href='#contact-me' id='Contact' onClick={() => pageState('Contact')}>
						Contact Me
					</a>
				</li>
				<li className={navState === 'Resume' ? 'current' : undefined}>
					<a href='#resume' id='Resume' onClick={() => pageState('Resume')}>
						Resume
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
