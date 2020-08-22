import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
	return (
		<div className='app'>
			<div className='app__body'>
				<Sidebar />
				<div className='app__content'>
					<h1>Content Here</h1>
				</div>
			</div>
		</div>
	);
}

export default App;
