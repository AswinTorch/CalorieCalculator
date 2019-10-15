import React, { useState } from "react";
import Output from "./Output";

const CalculatorForm = props => {
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [activityLevel, setActivityLevel] = useState(1);
  const [bmr, setBmr] = useState(0);
  const [calories, setCalories] = useState(0);

  const genderHandler = e => {
    setGender(e.target.value);
  };

  const ageHandler = e => {
    setAge(e.target.value);
  };

  const heightHandler = e => {
    let value = e.target.value;
    value = convertInchesToCentimeters(value);
    setHeight(value);
  };

  const weightHandler = e => {
    let value = e.target.value;
    value = convertPoundsToKilograms(value);
    setWeight(value);
  };

  const activityLevelHandler = e => {
    setActivityLevel(e.target.value);
  };

  const convertPoundsToKilograms = num => {
    return num * 0.453592;
  };

  const convertInchesToCentimeters = num => {
    return num * 2.54;
  };

  const calculateButtonHandler = e => {
    e.preventDefault();
    if (gender === "Male") {
      setBmr(Math.floor(10 * weight + 6.25 * height - 5 * age + 5));
    } else {
      setBmr(Math.floor(10 * weight + 6.25 * height - 5 * age - 161));
    }
    setCalories(Math.floor(bmr * activityLevel));
  };

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
              onChange={heightHandler}
            />
          </div>
          <div className="col-md-4 mb-3">
            <label>Weight</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter weight in pounds"
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
            <option value={1.2}>Sedentary</option>
            <option value={1.37}>Light Exercise</option>
            <option value={1.55}>Moderate Exercise</option>
            <option value={1.72}>
              Heavy Exercise
            </option>
            <option value={1.9}>Athlete Level</option>
          </select>
        </div>
        <br />
        <button className="btn btn-primary" onClick={calculateButtonHandler}>
          Calculate
        </button>
      </form>
      <br />
      <Output bmr={bmr} calories={calories}/>
      <br/>
    </div>
  );
};

export default CalculatorForm;
