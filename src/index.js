import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAVIbuvBVeNzCLbMeXh6Vt0I6jTsCD3zQk';

// NOTE: VERY IMPORTANT: React will try to render an element that may still be in process of being obtained, ie. request, so you need to set some conditions to avoid errors of "missing elements" to be called.
// This is essentially how you handle null props.
// TURNS OUT THIS IS NOT IDEAL, WE CAN ADD THE CONCEPT OF A "SELECTED VIDEO" IN THE APP STATE.

// CREATE A PERSONALIZED VERSION OF YOUTUBE.

class App extends Component {
	constructor(props){
		super(props);
		this.state = { videos: [],
									 selectedVideo: null
		};
		this.videoSearch('photovoltaics');
	}

	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos:videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
	    return (
	        <div>
	            <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
							<VideoDetail video={this.state.selectedVideo}/>
	            <VideoList
							  onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
							  videos={this.state.videos} />
	        </div>
	    );
    }
}

// NOTE: Note how you can pass to a class args and callback functions!

ReactDOM.render(<App />, document.querySelector('.container'))
