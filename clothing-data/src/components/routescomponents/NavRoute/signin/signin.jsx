import EmailLSignup from "../../../Signin-with-mail/signinwithform";
import EmaiLSignin from "../../../Realsignin/realsign";
import "./signin.style.scss";
const Sign = () => {
  return (
    <div className="AuthenticationPage">
      <EmaiLSignin />
      <EmailLSignup />
    </div>
  );
};

export default Sign;
