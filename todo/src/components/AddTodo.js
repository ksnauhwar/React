import React from 'react';
import { connect } from 'react-redux';
import {addTodo} from '../redux/actions/actionsCreators';
import { TodoContext } from '../redux/TodoContext';

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {input:''};
    }
    onClick(e){
        this.props.addTodo(this.state.input);
        this.setState({input:''});
    }
    onChange(e){
        e.preventDefault();
        this.setState({input:e.target.value});
    }
    render(){
        return (
            <div>
                <input value={this.state.input} onChange={this.onChange}></input>
                <button onClick={this.onClick}>Add Todo</button>
             </div>
        );
    }
}

export default connect(null,{addTodo},null,{context:TodoContext})(AddTodo);