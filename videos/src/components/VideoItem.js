import './VideoItem.css';
import React from 'react';

class VideoItem extends React.Component{
    render(){
        const video=this.props.video;
        return (
        <div className="video-item item" onClick={this.props.onClick.bind(this,video)}>
          <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
          <div className="content">
              <div className="header">
                 {video.snippet.title}    
               </div>
          </div>
        </div>
        );
    }
}
export default VideoItem;