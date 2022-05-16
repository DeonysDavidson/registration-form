import React, { useState } from "react";

const Mobile = (props) => {
  const [mobileState, setMobile] = useState("");
  const [errorState, setError] = useState(false);

  const validator = () => {
    if (
      mobileState === "" ||
      mobileState.length !== 10 ||
      !Number(mobileState)
    ) {
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
      <label for="mobile">Mobile : </label>
      <input
        className={classes.join(" ")}
        placeholder="Enter mobile no."
        aria-describedby="mobileNumberField"
        type="text"
        name="mobile"
        value={mobileState}
        onChange={(event) => setMobile(event.target.value)}
        onBlur={validator}
        onClick={() => setError(false)}
      />
      {errorState && (
        <small className="form-text text-muted">
          Phone number should be 10 digits
        </small>
      )}
    </div>
  );
};

export default Mobile;
