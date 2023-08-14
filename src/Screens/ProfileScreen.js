import React from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {
  // since we sent the user login details, to obtain the email we get the user from the redux store using the useSelector()
  const user = useSelector(selectUser);
  return (
    <div className="ProfileScreen">
      <Nav />
      <div className="ProfileScreen__body">
      <h1>Edit profile</h1>
      <div className="ProfileScreen__info">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFXNJBAFpMT10WIwmH4OuGWlVpEmtxguOvmefE06eZApPLP4KLdIQtwVS_k_XGsScrVc&usqp=CAU"
          alt=""
        />
        <div className="ProfileScreen__details">
          <h2>{user.email}</h2>
          <div className="ProfileScreen__plans">
          <button
            onClick={() => auth.signOut()}
            className="ProfileScreen__signout"
          >
            Sign Out
          </button>
          </div>
        </div>
      </div>
      </div>

    </div>
  );
}

export default ProfileScreen;
