import React from 'react';
import './Homepage.css';
import { useStateValue } from '../provider/StateProvider';
import Row from '../components/Row';

function Homepage({ spotify }) {
	const [{ playlists }] = useStateValue();

	return (
		<div className='homepage'>
			<h1>My Playlists</h1>

			<Row list={playlists} />
		</div>
	);
}

export default Homepage;
