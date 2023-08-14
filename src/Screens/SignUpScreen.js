import React, { useRef } from "react";
import "./SignUpScreen.css";
import { auth } from "../firebase";

function SignUpScreen() {
  // we have a ref to the field, to access the value
  const emailref = useRef(null);
  const passwordref = useRef(null);

  const register = (e) => {
    e.preventDefault(); // to prevent the page from refreshing when the button is clicked.

    auth
      .createUserWithEmailAndPassword(
        //to create a user with the email and password
        emailref.current.value,
        passwordref.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault(); // to prevent the page from refreshing when the button is clicked.

    auth
      .signInWithEmailAndPassword(// to sign in existing user
        emailref.current.value,
        passwordref.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="SignUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailref} placeholder="Email" type="email" />
        <input ref={passwordref} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="SignUpScreen__gray">New to Netflix? </span>
          <span className="SignUpScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
