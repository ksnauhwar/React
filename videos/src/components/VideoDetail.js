import React from 'react';

class VideoDetail extends React.Component{
 render(){
     if(this.props.video == null){
         return null;
     }
     return (
         <div>
             <div className="ui embed">
                <iframe src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`} title={this.props.video.id.videoId}></iframe>    
             </div>
            <div className="ui segment">
                <h4 className="ui header">{this.props.video.snippet.title}</h4>
                <p>{this.props.video.snippet.description}</p>
            </div>
         </div>);
 }
}

export default VideoDetail;