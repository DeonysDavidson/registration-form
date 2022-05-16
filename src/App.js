import { useEffect, useState } from "react";
import "./App.css";
import Name from "./containers/name/Name";
import Email from "./containers/email/Email";
import Mobile from "./containers/mobile/Mobile";
import Country from "./containers/country/Country";
import City from "./containers/city/City";
import State from "./containers/state/State";
import Message from "./containers/message/Message";

function App() {
  const [isNameReady, setNameReady] = useState(false);
  const [isEmailReady, setEmailReady] = useState(false);
  const [isMobileReady, setMobileReady] = useState(false);
  const [isCountryReady, setCountryReady] = useState(false);
  const [isCityReady, setCityReady] = useState(false);
  const [isStateReady, setStateReady] = useState(false);
  const [isMessageReady, setMessageReady] = useState(false);
  const [isFormReady, setFormReady] = useState(false);

  useEffect(() => {
    console.log("useEffect hit");
    if (
      isNameReady &&
      isEmailReady &&
      isMobileReady &&
      isCountryReady &&
      isCityReady &&
      isStateReady &&
      isMessageReady
    ) {
      setFormReady(true);
    } else {
      setFormReady(false);
    }
  }, [
    isNameReady,
    isEmailReady,
    isMobileReady,
    isCountryReady,
    isCityReady,
    isStateReady,
    isMessageReady,
  ]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (isFormReady) {
      alert("form submitted sucessfully");
    }
  };

  return (
    <div className="App">
      <div className="card">
        <div className="form">
          <h3 className="header">Registration Form</h3>
          <form>
            <Name ready={isNameReady} setReady={setNameReady} />
            <Email ready={isEmailReady} setReady={setEmailReady} />
            <Mobile ready={isMobileReady} setReady={setMobileReady} />
            <Country ready={isCountryReady} setReady={setCountryReady} />
            <City ready={isCityReady} setReady={setCityReady} />
            <State ready={isStateReady} setReady={setStateReady} />
            <Message ready={isMessageReady} setReady={setMessageReady} />
            <button
              disabled={!isFormReady}
              onClick={(event) => submitHandler(event)}
              type="button"
              class="btn btn-primary btn-lg btn-block"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
