import initialState from './state';
import {SELECTED_SUBREDDIT,REQUEST_POSTS,RECEIVE_POSTS,REFRESH_POSTS} from './constants';
import { combineReducers } from 'redux';

const selectedSubreddit = (state='liverpool',action) => {
       switch(action.type){
        case SELECTED_SUBREDDIT:{
            return action.payload.subreddit;
        }
        default:
            return state;
       }
}

const selectedPosts = (state = {
    isFetching:false,
    didInvalidate:false,
    lastUpdated:null,
    items:[]
},action) => {
    switch(action.type){
        case REQUEST_POSTS:{
            return Object.assign({},state,{
                        isFetching:true,
                        didInvalidate:false
               });
        }
        case REFRESH_POSTS:{
            return Object.assign({},state,{
                        didInvalidate:true
                });
        }
        case RECEIVE_POSTS:{
            return Object.assign({},state,{
                        isFetching:false,
                        didInvalidate:false,
                        lastUpdated:Date.now(),
                        items:action.payload.posts
                 });
        }
        default:
            return state;
    }
}

const posts = (state=initialState.posts,action) => {
    switch(action.type){
        case REQUEST_POSTS:
        case REFRESH_POSTS:
        case RECEIVE_POSTS:{
            return Object.assign({},state,{
                   [action.payload.subreddit]:selectedPosts(state[action.payload.subreddit],action)
                }
             );
        }
        default:
            return state;
    }
}

export default combineReducers({selectedSubreddit,posts});
