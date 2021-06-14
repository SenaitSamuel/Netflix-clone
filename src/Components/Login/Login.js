import React, { useState } from "react";
import Form from "../Form/Form";
import "./Login.css";
import SignIn from "../SignIn/SignIn";

function Login() {
  const [signIn, setSignIn] = useState(false);

  const handleSignIn = () => {
    setSignIn(true);
  };
  return (
    <div className="login">
      <div className="login__background">
        <h1 className="login__logo">NetFlix</h1>
        <button onClick={handleSignIn} className="login__button">
          Sign In
        </button>
        <div className="login__gradient"></div>
        {signIn ? (
          <SignIn />
        ) : (
          <div className="login__form">
            <Form
              handleSignIn={handleSignIn}
              title="Unlimited films, Tv programmes and more."
              subtitle="Watch anywhere. Cancel at any time."
              subtitle2="Ready to watch? Enter your email to create 
                or restart your membership."
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
