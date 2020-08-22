import React from 'react';
import './Sidebar.css';

import SidebarItem from './SidebarItem';
import LensOutlinedIcon from '@material-ui/icons/LensOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import RadioOutlinedIcon from '@material-ui/icons/RadioOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';

function Sidebar() {
	return (
		<div className='sidebar'>
			<img
				src='https://bit.ly/2CNCeoj'
				alt='Spotify Logo'
				className='sidebar__logo'
			/>
			<div className='sidebar__recommend'>
				<h4>Recommend</h4>
				<SidebarItem active Icon={LensOutlinedIcon} title='Discover' />
				<SidebarItem Icon={ListAltOutlinedIcon} title='Album' />
				<SidebarItem Icon={PersonOutlineOutlinedIcon} title='Artists' />
				<SidebarItem Icon={RadioOutlinedIcon} title='Radio Station' />
				<SidebarItem
					Icon={PlayCircleFilledWhiteOutlinedIcon}
					title='Music Video'
				/>
			</div>
			<div className='sidebar__mymusic'>
				<h4>My Music</h4>
				<SidebarItem Icon={LensOutlinedIcon} title='Recently Played' />
				<SidebarItem Icon={ListAltOutlinedIcon} title='Liked' />
				<SidebarItem Icon={PersonOutlineOutlinedIcon} title='My Video' />
				<SidebarItem Icon={RadioOutlinedIcon} title='Download' />
				<SidebarItem
					Icon={PlayCircleFilledWhiteOutlinedIcon}
					title='Music Video'
				/>
			</div>
		</div>
	);
}

export default Sidebar;
