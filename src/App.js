import React, { useState } from 'react';
import './style.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
	const [currentPage, setCurrentPage] = useState(<About></About>);
	const [navState, setNavState] = useState('About');

	function pageState(target) {
		switch (target) {
			case 'Portfolio':
				setCurrentPage(<Portfolio />);
				setNavState('Portfolio');
				break;
			case 'Contact':
				setCurrentPage(<Contact />);
				setNavState('Contact');
				break;
			case 'Resume':
				setCurrentPage(<Resume />);
				setNavState('Resume');
				break;
			default:
				setCurrentPage(<About />);
				setNavState('About');
				break;
		}
	}

	return (
		<div>
			<Header pageState={pageState} currentPage={currentPage} navState={navState}></Header>
			<main className='content-box'>{currentPage}</main>
			<Footer></Footer>
		</div>
	);
}

export default App;
