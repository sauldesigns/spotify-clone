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
import Homepage from './screens/Homepage';
import Footer from './components/Footer';
import { useCookies } from 'react-cookie';

const s = new SpotifyWebApi();

function App() {
	const [{ token }, dispatch] = useStateValue();
	const [cookies, setCookie] = useCookies(['token']);

	useEffect(() => {
		// Set token
		let _token = cookies.token;

		if (_token === 'undefined' || _token === null || _token === undefined) {
			const hash = getTokenFromResponse();
			window.location.hash = '';
			_token = hash.access_token;
			setCookie('token', hash.access_token);
		}

		if (_token !== 'undefined') {
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

			s.getFeaturedPlaylists().then((response) =>
				dispatch({
					type: 'SET_FEATURED_PLAYLISTS',
					featured_playlists: response,
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
	}, [cookies.token, setCookie, token, dispatch]);

	return (
		<Router>
			<div className='app'>
				{!token ? (
					<Login />
				) : (
					<div>
						<div className='app__body'>
							<Sidebar />
							<div className='app__content'>
								<Header />
								<Switch>
									<Route path='/discover' component={Discover} />
									<Route path='/'>
										<Homepage spotify={s} />
									</Route>
								</Switch>
							</div>
						</div>
						<Footer spotify={s} />
					</div>
				)}
			</div>
		</Router>
	);
}

export default App;
