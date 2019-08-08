import React from 'react';
import Picker from './Picker';
import {connect} from 'react-redux';
import {fetchPosts,selectSubreddit,refreshPosts} from '../redux/actions';
import Post from './Post';

class App extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleRefreshClick = this.handleRefreshClick.bind(this);
    }
    handleChange(subreddit){
        this.props.selectSubreddit(subreddit);
        this.props.fetchPosts(subreddit);
    }
    handleRefreshClick(subreddit){
        this.props.refreshPosts(subreddit);
        this.props.fetchPosts(subreddit);
    }
    render(){
        return (<div>
           <Picker options={['liverpool','kashmir']} 
                   selectedOption={this.props.selectedSubreddit} 
                   onChange={this.handleChange}></Picker>
            <button onClick={this.handleRefreshClick.bind(this,this.props.selectedSubreddit)}>Refresh</button>
           <Post post={this.props.selectedPost}/>
       </div>);
    }
}
const mapStateToProps = (state) => {
    const {selectedSubreddit,posts} = state;
    return {selectedSubreddit,selectedPost:posts[selectedSubreddit]};
}
export default connect(mapStateToProps,{fetchPosts,selectSubreddit,refreshPosts})(App);