import React from "react";

const Output = props => {
  return (
    <div className="alert alert-primary">
      <p>BMR: {props.bmr}</p>
    </div>
  );
};

export default Output;
