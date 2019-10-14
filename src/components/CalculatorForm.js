import React, { useState } from "react";

const CalculatorForm = props => {
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [activityLevel, setActivityLevel] = useState(1);
  const [bmr, setBmr] = useState(0);

  const genderHandler = e => {
    setGender(e.target.value);
  };

  const ageHandler = e => {
    setAge(e.target.value);
  };

  const heightHandler = e => {
    setHeight(e.target.value);
  };

  const weightHandler = e => {
    setWeight(e.target.value);
  };

  const activityLevelHandler = e => {
    setActivityLevel(e.target.value);
  };

  const calculateButtonHandler = () => {
    if (gender === "Male"){
        setBmr((10 * weight) + (6.25 * height) - (5 * age) + 5);
    } else {
        setBmr((10 * weight) + (6.25 * height) - (5 * age) - 161);
    }
  }

  return (
    <div className="container card">
      <form>
        <br />
        <div className="form-group">
          <label>Gender</label>
          <select
            className="form-control"
            value={gender}
            onChange={genderHandler}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label>Age</label>
            <input
              type="text"
              className="form-control"
              value={age}
              placeholder="Enter age"
              onChange={ageHandler}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label>Height</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter height in inches"
              value={height}
              onChange={heightHandler}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label>Weight</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter weight in pounds"
              value={weight}
              onChange={weightHandler}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Activity Level</label>
          <select
            className="form-control"
            value={activityLevel}
            onChange={activityLevelHandler}
          >
            <option value={1}>Basal Metabolic Rate</option>
            <option value={2}>Little to no exercise</option>
            <option value={3}>Exercise 1-3 times a week</option>
            <option value={4}>Exercise 4-5 times a week</option>
            <option value={5}>
              Daily exercise or intense exercise 3-4 times a week
            </option>
            <option value={6}>Intense exercise 5-7 times a week</option>
            <option value={7}>
              Very intense exercise daily or physical job
            </option>
          </select>
        </div>
        <br />
        <button className="btn btn-primary" onClick={calculateButtonHandler}>Calculate</button>
      </form>
      <br />
    </div>
  );
};

export default CalculatorForm;
