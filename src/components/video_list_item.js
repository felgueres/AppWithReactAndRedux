import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	// const video = props.video; THIS WOULD WORK TOTALLY FINE BUT THE SUGAR SYNTAX FROM E6 IS TO DEFINE AS ARGUMENT WITH CURLY BRACES.
  // This is ES6 syntax: {video, onVideoSelect}
  // Is equivalent to defining both props like const video = props.video & const onVideoSelect = props.onVideoSelect;
	const imageURL = video.snippet.thumbnails.default.url;

	return (
		<li onClick= {() => onVideoSelect(video)} className='list-group-item'>
			<div className='video-list media'>
				<div className='media-left'>
					<img className='media-object' src={imageURL}/>
				</div>

				<div className='media-body'>
					<div className='media-heading'>{video.snippet.title}</div>
				</div>
			</div>
		</li>);
};

export default VideoListItem
