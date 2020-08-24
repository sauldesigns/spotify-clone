import React, { useEffect } from 'react';
import './TrackListItem.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { useStateValue } from '../provider/StateProvider';

function TrackListItem({ track, onClick }) {
	const [{ item, playing, spotify }, dispatch] = useStateValue();
	useEffect(() => {
		spotify.getMyCurrentPlaybackState().then((r) => {
			dispatch({
				type: 'SET_PLAYING',
				playing: r.is_playing,
			});

			dispatch({
				type: 'SET_ITEM',
				item: r.item,
			});
		});
	}, [dispatch, spotify]);

	function millisToMinutesAndSeconds(millis) {
		var minutes = Math.floor(millis / 60000);
		var seconds = ((millis % 60000) / 1000).toFixed(0);
		return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
	}

	return (
		<div onClick={onClick} className='tracklistItem'>
			<div className='tracklistItem__left'>
				{playing && item?.id === track?.id && (
					<PauseIcon style={{ color: 'green' }} />
				)}
				{track?.id !== item?.id && <PlayArrowIcon />}
				{track?.id === item?.id && !playing && (
					<PlayArrowIcon style={{ color: 'green' }} />
				)}

				<div className='tracklistItem__info'>
					<h5>{track?.name}</h5>
					<h5>{track?.artists[0]?.name}</h5>
				</div>
			</div>
			<div className='tracklistItem__right'>
				<p>{millisToMinutesAndSeconds(track?.duration_ms)}</p>
			</div>
		</div>
	);
}

export default TrackListItem;
