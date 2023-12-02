//using new form given by browser for form submission||FormData constructor
import { useState } from "react";

export default function Signup() {
  //
  const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);

  //submit
  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target); //whatever i wanna extract must give that name prop
    //  const enteredEmail = fd.get("email");
    // const enteredPassword = fd.get("password");
    //but this can be a drag // using Object-alsoGivenByBrowser and formEntries()
    const data = Object.fromEntries(fd.entries()); //this gives us an array of all the input fields and their values
    //this data wll jsut give us an obj where we have key value pairs

    //one NOTE MULTIVALUE INPUT FIELDS VALUES ARE LOST LIKE IN accustion
    const acquisitionChannel = fd.getAll("acquisition");
    data.acquisition = acquisitionChannel;

    //checkig pw
    if (data.password !== data["confirm-password"]) {
      //because of the dash[]syntax
      setPasswordsAreNotEqual(true);
      return; //returning here so latter codes doesnt get executed
    }

    //sending data to http
    console.log("sending data to http", data);

    // reseting form
    //event.target.reset();
  }

  //
  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            required
            minLength={6}
          />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            required
          />
          <div className="control-error">
            {passwordsAreNotEqual && <p>Password did not match!</p>}
          </div>
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" required />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" required />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role" required>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input
            type="checkbox"
            id="terms-and-conditions"
            name="terms"
            required
          />
          I agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}
