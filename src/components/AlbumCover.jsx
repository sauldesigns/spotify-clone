import React from 'react';
import './AlbumCover.css';

function AlbumCover({ title, author, imgUrl, onClick }) {
	return (
		<div className='albumcover'>
			<img src={imgUrl} alt={title} />
			<div onClick={onClick} className='overlay'></div>
			<div className='albumcover__info'>
				<h3 onClick={onClick} className='albumcover__title'>
					{title}
				</h3>
				<h5 onClick={onClick} className='albumcover__author'>
					{author}
				</h5>
			</div>
		</div>
	);
}

export default AlbumCover;
