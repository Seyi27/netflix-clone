import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  // to show and hide the navbar
  const [show, setshow] = useState(false);

  // if the vertical scroll height is more than 100, setshow to true i.e show the black background
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setshow(true);
    } else {
      setshow(false);
    }
  };

  useEffect(() => {
    // an event listener is added to listen to the screen or the windows
    //this means that as we scroll, the transitionNavbar function is triggered
    window.addEventListener("scroll", transitionNavbar);
  }, []);

  return (
    //this is called string interpolation , this means 'nav__black' class should be added only when the 'show' state is true
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />

        <img
          onClick={() => navigate("/profile")}
          className="nav__avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFXNJBAFpMT10WIwmH4OuGWlVpEmtxguOvmefE06eZApPLP4KLdIQtwVS_k_XGsScrVc&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
