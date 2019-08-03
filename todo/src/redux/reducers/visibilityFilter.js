import {SET_FILTER,VISIBILITY_FILTERS} from '../actions/actionTypes';

const visibilityFilter = (state=VISIBILITY_FILTERS.SHOW_ALL,action) => {
    switch(action.type){
        case SET_FILTER:{
            return action.payload.filter;
        }
        default:
            return state;
    }
}

export default visibilityFilter;