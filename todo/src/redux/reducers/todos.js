import {ADD_TODO,TOGGLE_TODO} from '../actions/actionTypes';

const initialState = {
       todos:{
        allIds:[],
        byIds:{}
    }
};

const todos = (state = initialState.todos,action) => {
    switch(action.type){
        case "ADD_TODO":{
            return Object.assign({},state,{
                allIds:[...state.allIds,action.payload.id],
                byIds : {
                    ...state.byIds,
                    [action.payload.id] : { content:action.payload.content, isCompleted:false}
                }
            });
        }
        case "TOGGLE_TODO":{
            return Object.assign({},state,{
                byIds:{
                    ...state.byIds,
                    [action.payload.id] : {
                        ...state.byIds[action.payload.id],
                        isCompleted: !state.byIds[action.payload.id].isCompleted
                    }
                }
            });
        }
        default:
            return state;
    }
}

export default todos;