import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAVIbuvBVeNzCLbMeXh6Vt0I6jTsCD3zQk';

// NOTE: VERY IMPORTANT: React will try to render an element that may still be in process of being obtained, ie. request, so you need to set some conditions to avoid errors of "missing elements" to be called.
// This is essentially how you handle null props.

class App extends Component {
	constructor(props){
		super(props);
		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'photovoltaics'}, (videos) => {
			this.setState({ videos });
		});
	}

	render() {
	    return (
	        <div>
	            <SearchBar />
							<VideoDetail video={this.state.videos[0]}/>
	            <VideoList videos={this.state.videos} />
	        </div>
	    );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'))
