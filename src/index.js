import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, lon: null, errorMessage: ''};
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude, lon: position.coords.longitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      },
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat && !this.state.lon) {
      return <div>Error: {this.state.errorMessage}</div>
    } else if (!this.state.errorMessage && !this.state.lat || !this.state.lon) {
      return <div>...loading</div>
    } else {
      return <div>Your current latitude and longitude is [lat: {this.state.lat}, lon: {this.state.lon}]</div>
    } 
  };
}

ReactDOM.render(<App />, document.getElementById('root'));

