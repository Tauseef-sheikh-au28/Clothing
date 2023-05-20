const button_types = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonTypes, ...otherprops }) => {
  return (
    <button
      className={` button-container ${button_types[buttonTypes]}`}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default Button;
