import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Discover from './screens/Discover';

function App() {
	return (
		<Router>
			<div className='app'>
				<div className='app__body'>
					<Sidebar />
					<div className='app__content'>
						<Switch>
							<Route path='/discover' component={Discover} />
							<Route path='/' />
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
