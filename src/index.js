import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
// note lodash is typically imported as _
const API_KEY = 'AIzaSyAVIbuvBVeNzCLbMeXh6Vt0I6jTsCD3zQk';

// At this point, I'll bring lodash into the equation for utilities.

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
			const videoSearch = _.debounce((term) => { this.videoSearch(term)} , 300)

	    return (
	        <div>
	            <SearchBar onSearchTermChange={videoSearch} />
							<VideoDetail video={this.state.selectedVideo}/>
	            <VideoList
							  onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
							  videos={this.state.videos} />
	        </div>
	    );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'))
