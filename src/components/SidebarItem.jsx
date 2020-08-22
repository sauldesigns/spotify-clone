import React, { useEffect } from 'react';
import './SidebarItem.css';
import { Link, useLocation } from 'react-router-dom';

function SidebarItem({ Icon, title, active, path = '/' }) {
	let location = useLocation();

	useEffect(() => {}, [location]);
	return (
		<Link to={path} style={{ color: 'black', textDecoration: 'none' }}>
			<div
				className={`sidebaritem ${
					location.pathname === path && 'sidebaritem--selected'
				}`}
			>
				<Icon className='sidebaritem__icon' />
				<p className='sidebaritem__title'>{title}</p>
			</div>
		</Link>
	);
}

export default SidebarItem;
