import React from 'react';
import UserForm from './UserForm';
import Button from './Button';
import {NameContext} from './nameContext';
import StrikedContent from './StrikedContent';
import Mouse from './renderProps/Mouse';
import MousePostionDisplay from './renderProps/MousePositionDisplay';

const App = (props) => {
     return (
             <div>
                 <NameContext.Provider value="wimpy">
                     <UserForm></UserForm>
                     <StrikedContent/>
                     </NameContext.Provider>
                 <Button></Button>
                <StrikedContent/>
             </div>
         );
   // return (
      //  <Mouse render={(mousePosition)=>(<MousePostionDisplay mouse={mousePosition}/>)}/>
    //);
}
export default App;