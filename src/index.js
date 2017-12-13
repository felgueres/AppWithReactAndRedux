import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAVIbuvBVeNzCLbMeXh6Vt0I6jTsCD3zQk';

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
	            <VideoList videos={this.state.videos} />
	        </div>
	    );
    }
}

// 

ReactDOM.render(<App />, document.querySelector('.container'))


// ES6 Syntax: 
// Whenever you have the key and value from a dict the same, you can refactor it with:
// this.setState({videos: videos}) this is the same as this.setState({ videos });

// To pass from parent to child, you pass a property with JSX on the tag of the element.
// This is referred to as passing props.
// In this case you are passing data from App to Video lists: You are passing prop videos to VideoList
// If it is a functional component -- like VideoList here -- it's essentially passed as argument to the function.
// Example: 
// <VideoList videos= {this.state.videos} />
