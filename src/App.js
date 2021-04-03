import './App.css';
import './style.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
	return (
		<div>
			<Header></Header>
			<main className='content-box'>
				<About></About>
				<Portfolio></Portfolio>
			</main>
		</div>
	);
}

export default App;
