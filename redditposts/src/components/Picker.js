import React from 'react';

class Picker extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.onChange(e.target.value);
    }
    render(){
        return (
          <select value={this.props.selectedOption} onChange={this.handleChange}>
                {this.props.options.map(option => <option value={option} key={option}>{option}</option>)}
          </select>
        );
    }
}

export default Picker;