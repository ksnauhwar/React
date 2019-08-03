import React from 'react';


class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {searchText:''};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({searchText:e.target.value});
    }
    render(){
        return (
             <div className="ui segment">
                 <form className="ui form" onSubmit={this.props.onSubmit.bind(this,this.state.searchText)}>
                     <div className="ui field">
                         <label htmlFor="searchText">Search Video</label>
                         <input id="searchText" type="text" value={this.state.searchText} onChange={this.handleChange}></input>
                         </div>  
                 </form>
             </div>
        );
    }
}

export default SearchBar;
