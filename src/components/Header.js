import React from "react";

const Header = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title text-center">Calorie Calculator</h1>
        <p className="card-text text-center">
          A web app to calculate your calorie needs based on age, height,
          weight, and exercise.
        </p>
        <p className="card-text text-center">
          (This app uses the Mifflin-St Jeor Equation for calculations.)
        </p>
      </div>
    </div>
  );
};

export default Header;
