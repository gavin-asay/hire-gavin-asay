import './App.css';
import './style.css';
import Header from './components/Header';
import About from './components/About';

function App() {
	return (
		<div>
			<Header></Header>
			<main className='content-box'>
				<About></About>
			</main>
		</div>
	);
}

export default App;
