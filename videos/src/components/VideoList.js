import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component{
  render(){
      if(this.props.videos.length===0){
          return null;
      }
      const videos = this.props.videos.map((video)=>{
          const key = video.id.videoId || video.id.channelId;
      return <VideoItem key={key} video={video} onClick={this.props.onVideoClick}/>;
    });
      return <div className="ui relaxed divided list">{videos}</div>;
  }
}

export default VideoList;