import { Button, TextField } from "@mui/material";
import React from "react";
import loginimages from "../../assets/images/loginbg.png";
import { GiSaveArrow } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const DownloadLogin = () => {
  return (
    <>
      <div className="login downloadLofin">
        <div className="container">
          <div
            style={{
              backgroundImage: `url(${loginimages})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
            className="login__wrapper"
          >
            <div className="login__wrapper__top">
              <div className="login__titles">
                <p>Your logo</p>
                <input placeholder="logo" type="file" />
              </div>
              <form>
                <div className="form__input__wrapper">
                  <div className="input__wrapper">
                    <p>JSHSHIR</p>
                    <TextField
                      className="input"
                      id="outlined-basic"
                      label="JSHSHIR"
                      variant="filled"
                    />
                  </div>
                  <div className="input__wrapper">
                    <p>Pasport seriyasi</p>
                    <TextField
                      className="input"
                      id="outlined-basic"
                      label="Pasport seriyasi"
                      variant="filled"
                    />
                  </div>
                  <span className="top__span">Forgot Password</span>
                </div>
              </form>
              <NavLink to={"/sertifikat"} className="login__btn">
                <Button className="login__btn" variant="contained">
                  Kirish
                </Button>
              </NavLink>
              <span className="top__span__center">or contunio with</span>
            </div>
            <div className="login__wrapper__bottom">
              <span>Don't have an account yet?</span>
              <NavLink to={"/login"}>
                <p>Register for free</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadLogin;
