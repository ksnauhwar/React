import {SELECTED_SUBREDDIT,REQUEST_POSTS,RECEIVE_POSTS,REFRESH_POSTS} from './constants';
//import 'babel-polyfill';
//import fetch from 'cross-fetch';


export const selectSubreddit = (subreddit) => {
    return {
        type:SELECTED_SUBREDDIT,
        payload:{
            subreddit
        }
    }
}

export const requestPosts = (subreddit) => {
    return {
        type:REQUEST_POSTS,
        payload:{
            subreddit
        }
    }
}

export const receivePosts = (subreddit,posts) => {
    return {
        type:RECEIVE_POSTS,
        payload:{
            subreddit,
            posts
        }
    }
}

export const refreshPosts = (subreddit) => {
    return {
        type:REFRESH_POSTS,
        payload:{
            subreddit
        }
    }
}

export const fetchPosts = (subreddit) =>  {
    return (dispatch) => {
        dispatch(requestPosts(subreddit));
        return fetch("https://www.reddit.com/r/" + subreddit + ".json")
                .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
                )
                .then(json =>
                    //console.log(json.data.children),
                    dispatch(receivePosts(subreddit, json.data.children))
                );
    }
}