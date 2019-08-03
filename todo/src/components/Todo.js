import React from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from '../redux/actions/actionsCreators';
import {bindActionCreators} from 'redux';
import { TodoContext } from '../redux/TodoContext';


const Todo = ({todo,toggleTodo}) => {
 
    const element = todo.isCompleted ? <strike>{todo.content}</strike> : todo.content;

    return (<TodoContext.Consumer>
            {
              ({store}) =>(<li style={{cursor:"pointer"}} onClick={(e) => toggleTodo(todo.id)}>
                {console.log(store.getState())}:{element}
              </li>)
            }
            </TodoContext.Consumer>);
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return bindActionCreators({toggleTodo},dispatch);
}

export default connect(null,mapDispatchToProps,null,{context:TodoContext})(Todo);
// export default connect(null,{ toggleTodo })(Todo);