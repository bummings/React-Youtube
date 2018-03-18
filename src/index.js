import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBgkKEXuNlSPgg9aUx-uKSNqsyxSErFtPE';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] }

		YTSearch({key: API_KEY, term: 'Phonographiq'}, (videos) => {
			this.setState({ videos: videos });
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}


// take said component's generated html and inject it to the dom

ReactDOM.render(<App />, document.querySelector('.container'));













