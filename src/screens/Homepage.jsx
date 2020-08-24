import React from 'react';
import './Homepage.css';
import { useStateValue } from '../provider/StateProvider';
import Row from '../components/Row';
import TrackList from '../components/TrackList';

function Homepage({ spotify }) {
	const [{ playlists, recently_played }] = useStateValue();

	return (
		<div className='homepage'>
			<div className='homepage__left'>
				<h1>Featured Playlists</h1>
				<Row list={playlists} />
			</div>
			<div className='homepage__right'>
				<h1>Recently Played</h1>
				<TrackList list={recently_played?.items} />
			</div>
		</div>
	);
}

export default Homepage;
