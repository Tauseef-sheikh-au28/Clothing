import { useState } from "react";
import "./realsign.scss";
import FormInput from "../form-input/form-input.jsx";
import Button from "../button/btn-component.jsx";
import "../button/btn.styles.scss";
import {
  signInWithGooglePopup,
  Signinwithmail,
} from "../../utils/firebase/firebase.components.js";

const defaultFormFields = {
  email: "",
  password: "",
};

const EmaiLSignin = () => {
  const [Fields, setFields] = useState(defaultFormFields);
  const { email, password } = Fields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...Fields, [name]: value });
  };
  const resetFormField = () => {
    setFields(defaultFormFields);
  };

  const SignInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await Signinwithmail(email, password);

      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Password is incorrect");
          break;
        case "auth/user-not-found":
          alert("User not registered with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="SignUp">
      <h2>Already have an account ?</h2>
      <span>Sign In with Email and Password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="btn-container">
          <Button type="submit">SigIn</Button>
          <Button type="button" buttonTypes="google" onClick={SignInWithGoogle}>
            Google SignIn
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EmaiLSignin;
