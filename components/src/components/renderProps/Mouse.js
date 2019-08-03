import React from 'react';

class Mouse extends React.Component{
    constructor(props){
        super(props);
        this.state = {x:null,y:null};
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove(event){
        this.setState({x:event.clientX,y:event.clientY});
    }

    render(){
        return (
            <div style={{height:"100%"}} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}

export default Mouse;