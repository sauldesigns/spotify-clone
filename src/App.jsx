import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Discover from './screens/Discover';
import Header from './components/Header';
import Login from './screens/Login';

import { useStateValue } from './provider/StateProvider';
import { getTokenFromResponse } from './services/spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const s = new SpotifyWebApi();

function App() {
	const [{ token }, dispatch] = useStateValue();

	useEffect(() => {
		// Set token
		const hash = getTokenFromResponse();
		window.location.hash = '';
		let _token = hash.access_token;

		if (_token) {
			s.setAccessToken(_token);

			dispatch({
				type: 'SET_TOKEN',
				token: _token,
			});

			s.getPlaylist('37i9dQZEVXcJZyENOWUFo7').then((response) =>
				dispatch({
					type: 'SET_DISCOVER_WEEKLY',
					discover_weekly: response,
				})
			);

			s.getMyTopArtists().then((response) =>
				dispatch({
					type: 'SET_TOP_ARTISTS',
					top_artists: response,
				})
			);

			dispatch({
				type: 'SET_SPOTIFY',
				spotify: s,
			});

			s.getMe().then((user) => {
				dispatch({
					type: 'SET_USER',
					user,
				});
			});

			s.getUserPlaylists().then((playlists) => {
				dispatch({
					type: 'SET_PLAYLISTS',
					playlists,
				});
			});
		}
	}, [token, dispatch]);

	return (
		<Router>
			<div className='app'>
				{!token ? (
					<Login />
				) : (
					<div className='app__body'>
						<Sidebar />
						<div className='app__content'>
							<Header />
							<Switch>
								<Route path='/discover' component={Discover} />
								<Route path='/' />
							</Switch>
						</div>
					</div>
				)}
			</div>
		</Router>
	);
}

export default App;
