import { useState } from "react";

export default function Login() {
  // //
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  //
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(evt) {
    evt.preventDefault();
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
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(evt) => handleInputChange("email", evt)}
            value={enteredValues.email}
          />
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
