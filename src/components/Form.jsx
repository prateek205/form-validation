import React from "react";
import "../styles/form.css";
import { useForm } from "../context/authContext";

const Form = () => {
  const { error, successMsg, msgType, handleChange, handleSubmit, formData } =
    useForm();

  return (
    <React.Fragment>
      <div className="formContainer">
        <div className="formHeading">
          <h2>Form Validation</h2>
        </div>
        <form action="#" className="form" onSubmit={handleSubmit}>
          <p
            className="successMsg"
            style={{
              color: msgType === "success" ? "green" : "rgb(255, 37, 37)",
            }}
          >
            {successMsg}
          </p>
          <div className="nameInp">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="username"
            />
            {error.name && (
              <p id="nameError" className="inpErr">
                {error.name}
              </p>
            )}
          </div>
          <div className="nameInp">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="username"
            />
            {error.email && (
              <p id="emailError" className="inpErr">
                {error.email}
              </p>
            )}
          </div>
          <div className="nameInp">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
            {error.password && (
              <p id="passError" className="inpErr">
                {error.password}
              </p>
            )}
          </div>
          <div className="nameInp">
            <label htmlFor="cnfPass">Confirm Password *</label>
            <input
              type="password"
              name="cnfPass"
              value={formData.cnfPass}
              onChange={handleChange}
              autoComplete="new-password"
            />
            {error.cnfPass && (
              <p id="cnfPassError" className="inpErr">
                {error.cnfPass}
              </p>
            )}
          </div>
          <div className="subBtn" type="submit">
            <button>Submit Now</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Form;
