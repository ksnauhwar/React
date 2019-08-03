import unsplash from '../apis/unsplash';
import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
    constructor(props){
        super(props);
        this.initiateSearch = this.initiateSearch.bind(this);
        this.state = {images:[]};
    }
    async initiateSearch(searchText,e){
        e.preventDefault();
        const response = await unsplash.get('search/photos',{
            params:{
                query:searchText
            }
        });
        this.setState({images:response.data.results});
    }
    render(){
    return (
        <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar initiateSearch={this.initiateSearch} />
            Found {this.state.images.length} image(s)
            <ImageList images={this.state.images}/>
        </div>
    );
   }
}

export default App;