import React from 'react';
import {NameContext} from './nameContext';


const StrikedComponent = (props) => {
  //in consumer the function parameter value can have any name  
return (<NameContext.Consumer>
         {(value) => (<strike>{value}</strike>)}
        </NameContext.Consumer>);
}
export default StrikedComponent;