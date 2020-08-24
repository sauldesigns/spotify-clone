import React from 'react';
import './TrackList.css';
import TrackListItem from './TrackListItem';
import { useStateValue } from '../provider/StateProvider';

function TrackList({ list = [] }) {
	const [{ item, playing, spotify }, dispatch] = useStateValue();

	const playSong = (id) => {
		if (item?.uri === id) {
			handlePlayPause();
		} else {
			spotify
				.play({
					uris: [id],
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
		}
	};

	const handlePlayPause = () => {
		if (playing) {
			spotify.pause();
			dispatch({
				type: 'SET_PLAYING',
				playing: false,
			});
		} else {
			spotify.play();
			dispatch({
				type: 'SET_PLAYING',
				playing: true,
			});
		}
	};

	let uniqueList = list.filter(
		(ele, ind) =>
			ind === list.findIndex((elem) => elem.track.id === ele.track.id)
	);

	return (
		<div className='tracklist'>
			{uniqueList?.map((track) => (
				<TrackListItem
					onClick={() => playSong(track?.track.uri)}
					key={track?.track?.id}
					track={track?.track}
				/>
			))}
		</div>
	);
}

export default TrackList;
