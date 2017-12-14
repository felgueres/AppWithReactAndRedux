import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// note lodash is typically imported as _
const API_KEY = 'AIzaSyAVIbuvBVeNzCLbMeXh6Vt0I6jTsCD3zQk';

//NOTE: Callback functions are a nice way to communicate between parent and child components without much overhead but it could get messy.
// Up until this point it has been pure react, but including redux into the equation is going to have a solid impact on this.

// takeaway at this point:
// - We've only dealt with Component-level states.
// - The App and SearchBar both have states and are independent or localized.
// - This is going to change in Redux - which will be main change in Redux, more of an application level state.

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
