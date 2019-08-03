import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';


class ImageList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.images.length == null)
          return null;
        const images = this.props.images.map(image =>  {
                return <ImageCard key={image.id} image={image}/>;
         });

        return <div className="image-list">
            {images}
        </div>
    }
}

export default ImageList;


