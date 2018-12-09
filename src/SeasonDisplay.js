import React from "react";

const seasonConfig = {
  summer: {
    text: "Its warm during the summer",
    iconName: "sun"
  },
  winter: {
    text: "Its cold during winter",
    iconName: "snowflake"
  }
};

const getSeason = (lat, lon, month) => {
  if (month < 2 && month > 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, props.lon, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;

// Northern Hempiphere: Apr - Sep (Summer)
// Southern Hempiphere: Oct - Dec, Jan - Mar (Summer)

// Northern Hempiphere: Jan - Mar, Oct - Dec (Winter)
// Southern Hempiphere: Apr - Sep (Winter)
