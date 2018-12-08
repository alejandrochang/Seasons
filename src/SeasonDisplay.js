import React from 'react';

const getSeason = (lat, lon, month) => {
  if (month < 2 && month > 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}


const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, props.lon, new Date().getMonth())
  const text = season === 'winter' ? 'Burr its cold' : 'Hit the beach';
  const icon = season === 'winter' ? 'snowflake' : 'sun';

  return <div>
      <i className={`${icon} icon`} />
      <h1>{text}</h1>
      <i className={`${icon} icon`} />
    </div>;
}

export default SeasonDisplay;

// Northern Hempiphere: Apr - Sep (Summer)
// Southern Hempiphere: Oct - Dec, Jan - Mar (Summer)

// Northern Hempiphere: Jan - Mar, Oct - Dec (Winter)
// Southern Hempiphere: Apr - Sep (Winter)