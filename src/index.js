import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (error) => console.log(error)
  );


  return (
    <div>Hello World</div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

