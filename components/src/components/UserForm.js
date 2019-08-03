import React from 'react';
import {NameContext} from './nameContext';

class UserForm extends React.Component {
    static contextType = NameContext;
    render(){
        return (
            <div>
                <input value={this.context}></input>
            </div>
        );
    }
}

export default UserForm;