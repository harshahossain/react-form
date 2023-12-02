//

export default function Input({ label, id, error, ...props }) {
  //i pulled out id cause it would be easier to set it up with for and id
  return (
    <div className="control-row">
      <div className="control no-margin">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          //   onChange={(evt) => handleInputChange("email", evt)}
          //   value={enteredValues.email}
          //   onBlur={() => handleInputBlur("email")}
          {...props}
        />
        <div className="control-error">
          {/* {emailIsInvalid && <p>Please enter a valid email</p>} */}
          {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  );
}
