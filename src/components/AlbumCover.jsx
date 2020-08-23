import React from 'react';
import './AlbumCover.css';

function AlbumCover({ title, artist, track, author, imgUrl, onClick }) {
	return (
		<div className='albumcover'>
			<img src={imgUrl} alt={title} />
			<div onClick={onClick} className='overlay'></div>
			<div className='albumcover__info'>
				<h3 onClick={onClick} className='albumcover__title'>
					{title}
				</h3>

				{artist ? (
					<div>
						<br />
						<br />
					</div>
				) : (
					<h5 onClick={onClick} className='albumcover__author'>
						{author}
					</h5>
				)}
			</div>
		</div>
	);
}

export default AlbumCover;
