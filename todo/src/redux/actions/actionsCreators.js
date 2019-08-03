import {ADD_TODO,TOGGLE_TODO,SET_FILTER} from './actionTypes';

let  nextToDoId = 0;

export const addTodo = (content) => {
   return {
        type:ADD_TODO,
        payload:{
           id:nextToDoId++,
           content
        }
   };
}

export const toggleTodo = (id) =>{
    return {
        type : TOGGLE_TODO,
        payload : {
         id
        }
    }
}

export const setFilter = (filter) => {
    return {
        type : SET_FILTER,
        payload:{
            filter
        }
    }
}


