//validating input on keystroke

import { useState } from "react";
import Input from "./Input";

//
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
//
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
  const emailIsInvalid =
    didEdit.email &&
    !isEmail(enteredValues.email) &&
    !isNotEmpty(enteredValues.email);
  const passwordIsInvalid =
    didEdit.password &&
    !isNotEmpty(enteredValues.password) &&
    !hasMinLength(enteredValues.password, 6);
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
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={(evt) => handleInputChange("email", evt)}
          value={enteredValues.email}
          onBlur={() => handleInputBlur("email")}
          error={emailIsInvalid && "Please enter a valid email."}
        />
        <div className="control no-margin">
          <Input
            label="Password"
            id="password"
            type="password"
            name="password"
            onChange={(evt) => handleInputChange("password", evt)}
            value={enteredValues.password}
            onBlur={() => handleInputBlur("password")}
            error={
              passwordIsInvalid && "password must be at least 6 charecters."
            }
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
