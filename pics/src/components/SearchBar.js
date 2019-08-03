import React from 'react';

class SearchBar extends React.Component{
 constructor(props){
     super(props);
     this.onInputChange = this.onInputChange.bind(this);
     this.state={searchText:''};
 }
 onInputChange(e){
     e.preventDefault();
     this.setState({searchText:e.target.value});
 }
 render(){
     return (
     <div className="ui segment">
        <form className="ui form" onSubmit={this.props.initiateSearch.bind(this,this.state.searchText)}>
            <div className="ui field">  
            <label htmlFor="search-bar"> Image Search</label>
             <input id="search-bar" type="text" onChange={this.onInputChange} value={this.state.searchText}></input>
            </div>
        </form>
     </div>
     );
 }
}


export default SearchBar;