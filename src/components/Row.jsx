import React from 'react';
import './Row.css';
import AlbumCover from './AlbumCover';
import { useStateValue } from '../provider/StateProvider';

function Row({ list = [] }) {
	const [{ spotify }, dispatch] = useStateValue();

	const playPlaylist = (id) => {
		console.log(id);
		spotify
			.play({
				context_uri: id,
			})
			.then((res) => {
				spotify.getMyCurrentPlayingTrack().then((r) => {
					dispatch({
						type: 'SET_ITEM',
						item: r.item,
					});
					dispatch({
						type: 'SET_PLAYING',
						playing: true,
					});
				});
			});
	};

	const playSong = (id) => {
		spotify
			.play({
				uris: [`spotify:track:${id}`],
			})
			.then((res) => {
				spotify.getMyCurrentPlayingTrack().then((r) => {
					dispatch({
						type: 'SET_ITEM',
						item: r.item,
					});
					dispatch({
						type: 'SET_PLAYING',
						playing: true,
					});
				});
			});
	};

	return (
		<div className='row'>
			<div className='row__list'>
				{list?.items?.map((playlist) => (
					<AlbumCover
						className='row__cover'
						onClick={() => playPlaylist(playlist?.uri)}
						key={playlist?.id}
						title={playlist?.name}
						author={playlist?.owner?.display_name}
						imgUrl={playlist?.images[0]?.url}
					/>
				))}
			</div>
		</div>
	);
}

export default Row;
