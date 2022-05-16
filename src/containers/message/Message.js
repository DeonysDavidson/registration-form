import React, { useState } from "react";

const Message = (props) => {
  const [messageState, setMessage] = useState("");
  const [errorState, setError] = useState(false);

  const validator = () => {
    if (messageState === "") {
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
      <label for="message">Message : </label>
      <textarea
        className={classes.join(" ")}
        placeholder="Enter message"
        aria-describedby="messageField"
        name="message"
        rows="4"
        cols="50"
        value={messageState}
        onChange={(event) => setMessage(event.target.value)}
        onBlur={validator}
        onClick={() => setError(false)}
      />
      {errorState && (
        <small className="form-text text-muted">Enter Message</small>
      )}
    </div>
  );
};

export default Message;
