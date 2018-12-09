import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import './SeasonDisplay.css';

class App extends React.Component {
  state = { lat: null, lon: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(position => {
        this.setState({ lat: position.coords.latitude, lon: position.coords.longitude });
      }, error => { this.setState({ errorMessage: error.message });
    });
  }


  render() {
    if (this.state.errorMessage && !this.state.lat && !this.state.lon) {
      return <div>Error: {this.state.errorMessage}</div>
    } 
    if (!this.state.errorMessage && this.state.lat && this.state.lon) {
      return <SeasonDisplay lat={this.state.lat} lon={this.state.lon} />
    } 

    return <div><Spinner message="Please allow us to read your Location..."/></div>
  };
}

ReactDOM.render(<App />, document.getElementById('root'));

