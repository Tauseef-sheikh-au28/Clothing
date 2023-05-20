import { useState } from "react";
import {
  CreateAuthWithEmail,
  createrUserFromAuth,
} from "../../utils/firebase/firebase.components.js";
import "./signup.scss";
import FormInput from "../form-input/form-input.jsx";
import Button from "../button/btn-component.jsx";

import "../button/btn.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  ConfirmPassword: "",
};

const EmailLSignup = () => {
  const [Fields, setFields] = useState(defaultFormFields);
  const { displayName, email, password, ConfirmPassword } = Fields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...Fields, [name]: value });
  };
  const resetFormField = () => {
    setFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== ConfirmPassword) {
      alert("Wrong PassWord");

      return;
    }
    try {
      const { user } = await CreateAuthWithEmail(email, password);
      await createrUserFromAuth(user, { displayName });
      resetFormField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email is already in use");
      } else {
        console.log("getting error", error);
      }
    }
  };

  return (
    <div className="SignUp">
      <h2>don't have an account ?</h2>
      <span>Sign UP with Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="displayName"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="ConfirmPassword"
          value={ConfirmPassword}
          onChange={handleChange}
        />
        <Button type="submit"> SignUp</Button>
      </form>
    </div>
  );
};

export default EmailLSignup;
