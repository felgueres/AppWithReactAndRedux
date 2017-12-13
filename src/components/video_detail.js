import React from 'react';

const VideoDetail = ({video}) =>{

  // to avoid running this function before the video has been fetched, let's do some logic.

  if (!video){
    return <div>Loading</div>
  };

  const videoId = video.id.videoId;
  // const url = 'https://www.youtube.com/embed'+ videoId;
// Sugar syntax for the line above.
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className='video-detail col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={url}></iframe>
      </div>
      <div className='details'>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
