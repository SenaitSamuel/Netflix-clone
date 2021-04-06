import React, { useRef } from "react";
import { auth, provider } from "../../firebase";
import "./SignIn.css";

function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        // it successfully created a new user with email and password
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((auth) => {})
      .catch((error) => alert(error.message));
  };
  const signInWithGoogle = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => {
      alert(error.message);
    });
  };
  return (
    <div className="signIn">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="email" />
        <input ref={passwordRef} type="password" placeholder="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <button
          className="signIn__green"
          type="submit"
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </button>
        <h4>
          <span className="signIn__gray"> New to Netflix? </span>
          <span className="signIn__link" onClick={register}>
            {" "}
            Sign Up now.{" "}
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignIn;
