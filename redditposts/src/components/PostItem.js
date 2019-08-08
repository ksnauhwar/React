import React from 'react';

const PostItem = (props) => {
    return <li>{props.post.data.title}</li>
}

export default PostItem;