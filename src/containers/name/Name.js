import React, { useState } from "react";

const Name = (props) => {
  const [nameState, setName] = useState("");
  const [errorState, setError] = useState(false);

  const validator = () => {
    if (nameState === "") {
      props.setReady(false);
      setError(true);
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
      <label for="name">Name : </label>
      <input
        className={classes.join(" ")}
        placeholder="Enter name"
        aria-describedby="nameField"
        type="text"
        name="name"
        value={nameState}
        onChange={(event) => setName(event.target.value)}
        onBlur={validator}
        onClick={() => setError(false)}
      />
      {errorState && (
        <small className="form-text text-muted">Please enter a name</small>
      )}
    </div>
  );
};

export default Name;
