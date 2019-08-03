import './SeasonDisplay.css';
import React from 'react';

const getSeason = (lat,month)=>{
    if(lat>0){
        return month > 2 && month<9 ? 'summer' : 'winter';
    }else{
        return month>2 && month<9 ? 'winter' : 'summer';
    }
}
const seasonConfig = {
    summer:{
        iconName : 'massive orange sun icon',
        text:'Let\'s go to the beach'
    },
    winter:{
        iconName:'massive blue snowflake icon',
        text: 'Burr, its chilly'
    }
}
const SeasonDisplay =(props)=>{
    const season = getSeason(props.lat,new Date().getMonth());
    const {iconName,text} = seasonConfig[season] ;
   
    return (
    <div className='season-display'>
        <i className={`icon-left ${iconName}`}></i>
        <h1>{text}</h1>
        <i className={`icon-right ${iconName}`}></i>
    </div>
    );
}

export default SeasonDisplay;