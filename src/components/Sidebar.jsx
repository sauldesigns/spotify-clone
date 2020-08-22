import React from 'react';
import './Sidebar.css';

import SidebarItem from './SidebarItem';
import LensOutlinedIcon from '@material-ui/icons/LensOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import RadioOutlinedIcon from '@material-ui/icons/RadioOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import { Link } from 'react-router-dom';

function Sidebar() {
	return (
		<div className='sidebar'>
			<Link to='/'>
				<img
					src='https://bit.ly/2CNCeoj'
					alt='Spotify Logo'
					className='sidebar__logo'
				/>
			</Link>
			<div className='sidebar__recommend'>
				<h4>Recommend</h4>

				<SidebarItem
					path='/discover'
					Icon={LensOutlinedIcon}
					title='Discover'
				/>

				<SidebarItem path='/album' Icon={ListAltOutlinedIcon} title='Album' />
				<SidebarItem
					path='/artists'
					Icon={PersonOutlineOutlinedIcon}
					title='Artists'
				/>
				<SidebarItem
					path='/radio-station'
					Icon={RadioOutlinedIcon}
					title='Radio Station'
				/>
				<SidebarItem
					path='/musicvideo'
					Icon={PlayCircleFilledWhiteOutlinedIcon}
					title='Music Video'
				/>
			</div>
			<div className='sidebar__mymusic'>
				<h4>My Music</h4>
				<SidebarItem
					path='/recently-played'
					Icon={LensOutlinedIcon}
					title='Recently Played'
				/>
				<SidebarItem path='/liked' Icon={ListAltOutlinedIcon} title='Liked' />
				<SidebarItem
					path='/download'
					Icon={RadioOutlinedIcon}
					title='Download'
				/>
			</div>
		</div>
	);
}

export default Sidebar;
