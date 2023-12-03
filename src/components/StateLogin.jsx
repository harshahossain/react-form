//validating input on keystroke

import { useState } from "react";
import Input from "./Input";

//
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";
//
export default function StateLogin() {
  //
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => {
    //
    return isEmail(value) && isNotEmpty(value);
  });

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));
  //

  function handleSubmit(evt) {
    evt.preventDefault();

    if (emailHasError || passwordHasError) {
      return;
    }
    //sending to http
    console.log(emailValue, passwordValue);
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
          onChange={handleEmailChange}
          value={emailValue}
          onBlur={handleEmailBlur}
          error={emailHasError && "Please enter a valid email."}
        />
        <div className="control no-margin">
          <Input
            label="Password"
            id="password"
            type="password"
            name="password"
            onChange={handlePasswordChange}
            value={passwordValue}
            onBlur={handlePasswordBlur}
            error={
              passwordHasError && "password must be at least 6 charecters."
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
