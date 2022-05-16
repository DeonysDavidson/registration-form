import React, { useState } from "react";

const State = (props) => {
  const [stateState, setState] = useState("");
  const [errorState, setError] = useState(false);

  const validator = () => {
    if (stateState === "") {
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
      <label for="state">State : </label>
      <input
        className={classes.join(" ")}
        placeholder="Enter state"
        aria-describedby="stateField"
        type="text"
        name="state"
        value={stateState}
        onChange={(event) => setState(event.target.value)}
        onBlur={validator}
        onClick={() => setError(false)}
      />
      {errorState && (
        <small className="form-text text-muted">Enter the State</small>
      )}
    </div>
  );
};

export default State;
