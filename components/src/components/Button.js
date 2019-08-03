import React from 'react';
import {NameContext} from './nameContext';

class Button extends React.Component{
    render(){
        return <button>{this.context}</button>
    }
}
Button.contextType = NameContext;
export default Button;