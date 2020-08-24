import React, { useEffect, useState } from 'react';
import './Footer.css';
import { useStateValue } from '../provider/StateProvider';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import { Grid, Slider } from '@material-ui/core';

function Footer({ spotify }) {
	const [
		{ item, playing, device_id, shuffle, repeat },
		dispatch,
	] = useStateValue();
	const [volumeSlider, setVolumeSlider] = useState(100);

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

			dispatch({
				type: 'SET_SHUFFLE',
				shuffle: r.shuffle_state,
			});

			dispatch({
				type: 'SET_REPEAT',
				repeat: r.repeat_state,
			});

			// dispatch({
			// 	type: 'SET_VOLUME',
			// 	volume: r.device.volume_percent,
			// });

			// dispatch({
			// 	type: 'SET_DEVICE_ID',
			// 	device_id: r.device.id,
			// });
		});
	}, [item, playing, spotify, dispatch]);

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

	const skipNext = () => {
		spotify.skipToNext();
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
	};

	const skipPrevious = () => {
		spotify.skipToPrevious();
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
	};

	const changeVolume = (e, value) => {
		// spotify.setVolume(value, { device_id: device_id });
		setVolumeSlider(value);

		// dispatch({
		// 	type: 'SET_VOLUME',
		// 	volume: value,
		// });
	};

	const changeRepeat = () => {
		let temp = '';
		if (repeat === 'off') {
			temp = 'context';
		} else if (repeat === 'context') {
			temp = 'track';
		} else {
			temp = 'off';
		}
		spotify.setRepeat(temp);
		dispatch({
			type: 'SET_REPEAT',
			repeat: temp,
		});
	};

	const changeShuffle = () => {
		spotify.setShuffle(!shuffle);
		dispatch({
			type: 'SET_SHUFFLE',
			shuffle: !shuffle,
		});
	};

	return (
		<div className='footer'>
			<div className='footer__left'>
				{item ? (
					<img className='footer__albumLogo' alt='album cover' />
				) : (
					<img
						className='footer__albumLogo'
						src={item?.album.images[0].url}
						alt={item?.name}
					/>
				)}
				{item ? (
					<div className='footer__songInfo'>
						<h4>{item.name}</h4>
						<p>{item.artists.map((artist) => artist.name).join(', ')}</p>
					</div>
				) : (
					<div className='footer__songInfo'>
						<h4>No song is playing</h4>
						<p>...</p>
					</div>
				)}
			</div>

			<div className='footer__center'>
				<ShuffleIcon
					onClick={() => changeShuffle()}
					className={`${shuffle && 'footer__green'}`}
				/>
				<SkipPreviousIcon onClick={skipPrevious} className='footer__icon' />
				{playing ? (
					<PauseCircleOutlineIcon
						onClick={handlePlayPause}
						fontSize='large'
						className='footer__icon'
					/>
				) : (
					<PlayCircleOutlineIcon
						onClick={handlePlayPause}
						fontSize='large'
						className='footer__icon'
					/>
				)}
				<SkipNextIcon onClick={skipNext} className='footer__icon' />
				{repeat === 'track' ? (
					<RepeatOneIcon
						onClick={() => changeRepeat()}
						className='footer__green'
					/>
				) : (
					<RepeatIcon
						onClick={() => changeRepeat()}
						className={`${repeat === 'context' && 'footer__green'}`}
					/>
				)}
			</div>
			<div className='footer__right'>
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item xs>
						<Slider
							onChange={changeVolume}
							value={volumeSlider}
							style={{ minWidth: 200 }}
							aria-labelledby='continuous-slider'
						/>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Footer;
