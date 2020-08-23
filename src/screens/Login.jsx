import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { accessUrl } from '../services/spotify';

function Login() {
	return (
		<div className='login'>
			<div className='login__container'>
				<img src='https://bit.ly/2CNCeoj' alt='Spotify Logo' />
				<br />

				<Button
					variant='contained'
					style={{
						backgroundColor: '#0a8d48',
						color: 'white',
						fontWeight: 600,
					}}
					href={accessUrl}
				>
					Sign In with Spotify
				</Button>
			</div>
		</div>
	);
}

export default Login;
