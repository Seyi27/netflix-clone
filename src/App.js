import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./Screens/ProfileScreen";

function App() {
  //since we have dispatch the action to the store, we use the 'useSelector()' to pull out object from the store
  const user = useSelector(selectUser); // it will return the user from the store which is then used in our router below. 
  const dispatch = useDispatch();// we use it do dispatch action to the redux store.

  //to know if the user is logged in or not
  //onAuthStateChanged is a listener that listens to authentication state change. it is used to know if the user is
  //logged in or not. and it gives back a userAuth as a callback
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      // the below means that when the onAuthStateChanged detetct that a user is logged in,
      // it sends or dispatch the users details to the store (in redux). so now we
      // can access it from anywhere in the app.
      if (userAuth) {
        //logged in
        console.log(userAuth);
        dispatch( // when the user is logged in, we dispatch the login details to the redux store, so we can pull it and use it anywhere in our app.
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //logged out
        dispatch(logout()); // when we are logged out, it resets the user back null. this is dispatched to the store.
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      {/* means if the user does not exist it should render the login page else render the homescreen */}
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />

          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
