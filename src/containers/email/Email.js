import React, { useState } from "react";

const Email = (props) => {
  const [emailState, setEmail] = useState("");
  const [errorState, setError] = useState(false);

  const validator = () => {
    if (
      emailState === "" ||
      !emailState.includes("@") ||
      !emailState.includes(".")
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
      <label for="email">Email : </label>
      <input
        className={classes.join(" ")}
        placeholder="Enter email"
        aria-describedby="emailField"
        type="email"
        name="email"
        value={emailState}
        onChange={(event) => setEmail(event.target.value)}
        onBlur={validator}
        onClick={() => setError(false)}
      />
      {errorState && (
        <small className="form-text text-muted">
          Please enter a valid Email (
          <em>
            <strong>example : </strong>john@yahoo.com
          </em>
          ){" "}
        </small>
      )}
    </div>
  );
};

export default Email;
