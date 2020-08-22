import React from 'react';
import './SidebarItem.css';

function SidebarItem({ Icon, title, active }) {
	return (
		<div className={`sidebaritem ${active && 'sidebaritem--selected'}`}>
			<Icon className='sidebaritem__icon' />
			<p className='sidebaritem__title'>{title}</p>
		</div>
	);
}

export default SidebarItem;
