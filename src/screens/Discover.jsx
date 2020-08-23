import React from 'react';
import { useStateValue } from '../provider/StateProvider';
import AlbumCover from '../components/AlbumCover';
import Row from '../components/Row';

function Discover() {
	const [{ featured_playlists, top_artists }] = useStateValue();

	return (
		<div>
			<h1>Featured Playlists</h1>
			<Row list={featured_playlists.playlists} />
			<h1>Top Artists</h1>
			<Row artist list={top_artists} />
		</div>
	);
}

export default Discover;
