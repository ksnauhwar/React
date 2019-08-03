import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions/actionsCreators';
import {VISIBILITY_FILTERS} from '../redux/actions/actionTypes';
import { VisibilityFilterContext } from '../redux/VisiblityFilterContext';

const VisibilityFilters = ({activeFilter,setFilter})=>{
     return (
          <div>
            <span 
                style={getComputedStyle(activeFilter,VISIBILITY_FILTERS.SHOW_ALL)} 
                onClick={(e) =>setFilter(VISIBILITY_FILTERS.SHOW_ALL)}>all&nbsp;</span>
            <span 
                style={getComputedStyle(activeFilter,VISIBILITY_FILTERS.SHOW_COMPLETE)}
                onClick={(e) =>setFilter(VISIBILITY_FILTERS.SHOW_COMPLETE)}>completed&nbsp;</span>
            <span 
                style={getComputedStyle(activeFilter,VISIBILITY_FILTERS.SHOW_ACTIVE)}
                onClick={(e) =>setFilter(VISIBILITY_FILTERS.SHOW_ACTIVE)}>active</span>
          </div>
    );
 
}

const getComputedStyle = (activeFilter,filter) => {
  const filterStyle = {
      cursor:"pointer",
      textDecoration:getTextDecoration(activeFilter,filter)
  }
  return filterStyle;
}

const getTextDecoration = (activeFilter,filter) => {
    return activeFilter===filter ? "underline" : "none";
}

const mapStateToProps = (state) =>{
   const activeFilter= state;
   return {activeFilter};
}

export default connect(mapStateToProps,{ setFilter },null,{context:VisibilityFilterContext})(VisibilityFilters);