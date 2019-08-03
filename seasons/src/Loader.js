import React from 'react';


class Loader extends React.Component{
    render(){
    return (
       <div className="ui active dimmer">
          <div className="ui large text loader">{this.props.loadingText}</div>
        </div>
      );
    }
}

//*****/imp trick
Loader.defaultProps = {
loadingText : 'Loading wait...'
};

export default Loader;