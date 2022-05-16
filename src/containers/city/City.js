import React, { useState } from "react";

const City = (props) => {
  const [cityState, setCity] = useState("");
  const [errorState, setError] = useState(false);

  const validator = () => {
    if (cityState === "") {
      setError(true);
      props.setReady(false);
    } else {
      props.setReady(true);
    }
  };

  let classes = ["form-control"];
  props.ready && classes.push("green");
  if (errorState) {
    classes = classes.filter((ele) => ele !== "green");
    classes.push("red");
  }

  return (
    <div className="form-group">
      <label for="city">City : </label>
      <input
        className={classes.join(" ")}
        placeholder="Enter city"
        aria-describedby="cityField"
        type="text"
        name="city"
        value={cityState}
        onChange={(event) => setCity(event.target.value)}
        onBlur={validator}
        onClick={() => setError(false)}
      />
      {errorState && (
        <small className="form-text text-muted">Enter the city</small>
      )}
    </div>
  );
};

export default City;
