import React from 'react';
import './Homepage.css';
import { useStateValue } from '../provider/StateProvider';
import Row from '../components/Row';

function Homepage({ spotify }) {
	const [{ playlists }, dispatch] = useStateValue();

	console.log(playlists);
	return (
		<div className='homepage'>
			<h1>Homepage</h1>

			<Row spotify={spotify} list={playlists} />
		</div>
	);
}

export default Homepage;
