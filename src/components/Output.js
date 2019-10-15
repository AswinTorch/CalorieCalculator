import React from "react";

const Output = props => {
  return (
    <div>
      <p>Default values shown below are the calorie adjustments being made to your daily calorie requirements.</p>
      <label className="alert alert-secondary">BMR: {props.bmr}</label>
      &nbsp;&nbsp;
      <label className="alert alert-primary">Maintain Weight: {props.calories}</label>
      &nbsp;&nbsp;
      <label className="alert alert-danger">Lose Weight (1lb/week): {props.calories - 500}</label>
      &nbsp;&nbsp;
      <label className="alert alert-danger">Lose Weight (2lb/week): {props.calories - 1000}</label>
      &nbsp;&nbsp;
      <label className="alert alert-success">Gain Weight (1lb/week): {props.calories + 500}</label>
      &nbsp;&nbsp;
      <label className="alert alert-success">Gain Weight (2lb/week): {props.calories + 1000}</label>
    </div>
  );
};

export default Output;
