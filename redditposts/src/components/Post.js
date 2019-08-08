import React from 'react';
import PostItem from './PostItem';

const Post = (props) => {
    if(!props.post.items && props.post.isFetching == false ){
        return null;
    }
    if(props.post.isFetching){
        return <div>Loading...</div>;
    }
    return (
        <ul>
         {props.post.items.map(item => <PostItem post={item} key={item.data.title}></PostItem>)}
        </ul>
    );
}
export default Post;