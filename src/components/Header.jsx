import React from 'react';
import './Header.css';

import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import { Avatar } from '@material-ui/core';
import { useStateValue } from '../provider/StateProvider';

function Header() {
	const [{ user }] = useStateValue();

	return (
		<div className='header'>
			<div className='header__search'>
				<input type='text' placeholder='Search' />
				<SearchOutlinedIcon />
			</div>

			<div className='header__buttons'>
				<SettingsOutlinedIcon onClick={() => console.log('settings')} />
				<NotificationsNoneOutlinedIcon
					onClick={() => console.log('notifications')}
				/>

				<Avatar
					onClick={() => console.log('avatar')}
					src={user?.images[0]?.url}
					alt={user?.display_name}
				/>
			</div>
		</div>
	);
}

export default Header;
