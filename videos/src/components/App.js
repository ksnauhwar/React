import youtube from '../apis/youtube';
import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    constructor(props){
        super(props);
        this.searchVideo = this.searchVideo.bind(this);
        this.state = {videoList:[],selectedVideo:null};
        this.onVideoClick = this.onVideoClick.bind(this);
    }
    onVideoClick(video,e){
        e.preventDefault();
        this.setState({selectedVideo:video});
    }
    async searchVideo(searchText,e){
        e.preventDefault();
        const response = await youtube.get('search',{
            params:{
                q:searchText
            }
        });
        this.setState({videoList:response.data.items,selectedVideo:response.data.items[0]});
    }
   render(){
       return (
       <div className="ui container" style={{marginTop:'10px'}}>
         <SearchBar onSubmit={this.searchVideo}/>    
          Found {this.state.videoList.length} video(s)
          <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
                    <VideoDetail video={this.state.selectedVideo}/>
                </div>
                <div className="five wide column">
                    <VideoList videos={this.state.videoList} onVideoClick={this.onVideoClick}/>
                </div>
            </div>
         </div>
       </div>);
   }
}

export default App;