import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [see, setSee] = useState(false);
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__wrapper">
          <div className="navbar__left">
            <button
              value={see}
              onClick={() => setSee((p) => !p)}
              className="navbar__menu"
            >
              <RxHamburgerMenu />
            </button>

            <p>MENYU</p>
          </div>
        </div>
      </div>
      {see ? (
        <div className="navbar__menu__absolute">
          <NavLink to={"/lessonTables"} className="navbar__menu__link">
            DARS JADVALI
          </NavLink>
          <NavLink to={"/homework"} className="navbar__menu__link">
            VAZIFALAR
          </NavLink>
          <NavLink className="navbar__menu__link">KUTUBXONA</NavLink>
          <NavLink className="navbar__menu__link">YAKUNIY TEST</NavLink>
          <NavLink to={"/privateOffice"} className="navbar__menu__link">
            SHAXSIY MA'LUMOT
          </NavLink>
          <NavLink to={"/science"} className="navbar__menu__link">
            FANLAR
          </NavLink>
          <NavLink to={"/login"} className="navbar__menu__link">
            Login
          </NavLink>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
