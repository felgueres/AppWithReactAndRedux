import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {

	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem
			  onVideoSelect={props.onVideoSelect}
			  key={video.etag}
			  video={video} />
		)
	});

// NOTE: For every element in an array, it is always best to asign a unique key to it.
// From the youtube API it's pretty straightforward cuz they already have an etag included in the array. Let's pass it here as a prop.

	return (
	<ul className="col-md-4 list-group">
		{videoItems}
	</ul>
	);
};

export default VideoList;
