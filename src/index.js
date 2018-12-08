import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import './index.css';

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
    } else if (!this.state.errorMessage && !this.state.lat || !this.state.lon) {
      return <div>...loading</div>
    } else {
      return <SeasonDisplay lat={this.state.lat} lon={this.state.lon}/>
    } 
  };
}

ReactDOM.render(<App />, document.getElementById('root'));

