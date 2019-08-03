import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component{
    constructor(props){
        super(props);
        this.getUserLocation = this.getUserLocation.bind(this);
        this.state = {lat:null,error:null};
    }
    getUserLocation(){
      window.navigator.geolocation.getCurrentPosition(
          (position) => this.setState({lat:position.coords.latitude}),
          (err) => this.setState({error:err.message})
      );
    }
    componentDidMount(){
      window.setTimeout(this.getUserLocation,3000);
    }

    //avoid conditional rendering in render
    //if we have a requirement which should be refleced in all of the three cases below
    //ex: add red border to the screen(className="border red")
    //we will have to make the changes thrice i.e. in all the conditions
    //instead extract the conditions in a helper method and refactor like below:
    renderContent(){
        if(this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        if(this.state.error){
            return <div>Error while fetching your location!</div>
        }
        return <Loader loadingText="Please wait while your location is being detected....."/>;
    }
    render(){
        return (
        <div className="border red">
            {this.renderContent()}
        </div>
        );
    }
}

export default App;