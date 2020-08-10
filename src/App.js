import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  'Sevilla',
  'Cartaya',
  'Anchorage',
  'Dublin'
]

class App extends Component {

  handleSelectedLocation = city => {
    console.log("handleSelectedLocation " + city);
  }

  render() {
    return (
      <div className="App" >
        {/* <WeatherLocation city="Cartaya"></WeatherLocation> */}
        <LocationList cities={cities}
          onSelectedLocation={this.handleSelectedLocation}></LocationList>
      </div>
    );
  }
}

export default App;
