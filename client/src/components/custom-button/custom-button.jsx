import React from "react";
import "./custom-button.scss";
import { CustomButtonContainer } from "./custom-button-style";

/*
OLD METHOD
const CustomButton = ({
  children,
  isGoogleSignIn,
  isInverted,
  ...otherProps
}) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
      isInverted ? "inverted" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);*/

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
