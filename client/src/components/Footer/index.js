import React from 'react';

function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer>
			<p>© 2021 {year > 2021 ? `–${year}` : ``} Gavin Asay</p>
		</footer>
	);
}

export default Footer;
