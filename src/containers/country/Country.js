import React, { useState } from "react";

const Country = (props) => {
  const [countryState, setCountry] = useState("");
  const [errorState, setError] = useState(false);

  const validator = () => {
    if (countryState === "") {
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
      <label for="country">Country : </label>
      <input
        className={classes.join(" ")}
        placeholder="Enter country"
        aria-describedby="countryField"
        type="text"
        name="country"
        value={countryState}
        onChange={(event) => setCountry(event.target.value)}
        onBlur={validator}
        onClick={() => setError(false)}
      />
      {errorState && (
        <small className="form-text text-muted">Enter the country</small>
      )}
    </div>
  );
};

export default Country;
