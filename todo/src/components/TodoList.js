import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { VISIBILITY_FILTERS } from '../redux/actions/actionTypes';
import { TodoContext } from '../redux/TodoContext';
import { VisibilityFilterContext } from '../redux/VisiblityFilterContext';
import {compose} from 'redux';

const TodoList = ({todos,visibilityFilter}) => {
  const visibleTodos = getVisibleTodos(todos.byIds,todos.allIds,visibilityFilter);
  return visibleTodos 
         ? <ul>{visibleTodos.map((todo) => {
                 return todo 
                 ? <Todo todo={todo} key={todo.id}></Todo>
                 : null;
              })}
            </ul>
          : null;
}

const mapTodoStateToProps = (state) => {
    return {todos : state};
}

const mapVisibleStateToProps = (state) => {
  return {visibilityFilter:state};
}

const getVisibleTodos = (byIds,allIds,visibilityFilter) => {
  let todos = allIds && allIds.length
                 ? allIds.map((id)=>({id,...byIds[id]}) )
                 : null;
  if(!todos){
    return null;
  }
  switch(visibilityFilter){
    case VISIBILITY_FILTERS.SHOW_ACTIVE:{
      return todos.filter(todo => todo.isCompleted == false);
    }
    case VISIBILITY_FILTERS.SHOW_COMPLETE:{
      return todos.filter(todo => todo.isCompleted);
    }
    case VISIBILITY_FILTERS.SHOW_ALL:
    default:
        return todos;
  }
}

export default compose(connect(mapTodoStateToProps,null,null,{context:TodoContext}),
                       connect(mapVisibleStateToProps,null,null,{context:VisibilityFilterContext}))(TodoList);