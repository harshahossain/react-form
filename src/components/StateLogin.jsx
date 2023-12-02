//validating input on keystroke

import { useState } from "react";

export default function StateLogin() {
  // //
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  //
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });
  //validating
  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  //
  function handleSubmit(evt) {
    evt.preventDefault();

    setEnteredValues({
      email: "",
      password: "",
    });
  }

  //handleChanges
  // function handleEmailChange(evt) {
  //   setEnteredEmail(evt.target.value);
  // }
  // function handlePasswordChange(evt) {
  //   setEnteredPassword(evt.target.value);
  // }
  function handleInputChange(identifier, evt) {
    setEnteredValues((prevState) => ({
      ...prevState,
      [identifier]: evt.target.value,
    })); //must do ({})
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>State Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(evt) => handleInputChange("email", evt)}
            value={enteredValues.email}
            onBlur={() => handleInputBlur("email")}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(evt) => handleInputChange("password", evt)}
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
