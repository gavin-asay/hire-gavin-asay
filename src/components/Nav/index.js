import React from 'react';

function Nav({ pageState }) {
	return (
		<nav>
			<ul>
				<li>
					<a href='#about-me' id='About' onClick={() => pageState('About')}>
						About Me
					</a>
				</li>
				<li>
					<a href='#portfolio' id='Portfolio' onClick={() => pageState('Portfolio')}>
						Portfolio
					</a>
				</li>
				<li>
					<a href='#contact-me' id='Contact' onClick={() => pageState('Contact')}>
						Contact Me
					</a>
				</li>
				<li>
					<a href='#resume' id='Resume' onClick={() => pageState('Resume')}>
						Resume
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
