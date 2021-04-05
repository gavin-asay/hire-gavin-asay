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

	function pageState(target) {
		switch (target) {
			case 'Portfolio':
				setCurrentPage(<Portfolio></Portfolio>);
				break;
			case 'Contact':
				setCurrentPage(<Contact></Contact>);
				break;
			case 'Resume':
				setCurrentPage(<Resume></Resume>);
				break;
			default:
				setCurrentPage(<About></About>);
				break;
		}
	}

	return (
		<div>
			<Header pageState={pageState}></Header>
			<main className='content-box'>{currentPage}</main>
			<Footer></Footer>
		</div>
	);
}

export default App;
