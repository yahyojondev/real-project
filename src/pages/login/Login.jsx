import { Button, TextField } from "@mui/material";
import React from "react";
import loginimages from "../../assets/images/loginbg.png";
import { GiSaveArrow } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
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
              <h3>Login</h3>
            </div>
            <form>
              <div className="form__input__wrapper">
                <div className="input__wrapper">
                  <p>Login</p>
                  <TextField
                    className="input"
                    id="outlined-basic"
                    label="FIO"
                    variant="filled"
                  />
                </div>
                <div className="input__wrapper">
                  <p>Parol</p>
                  <TextField
                    className="input"
                    id="outlined-basic"
                    label="Password"
                    variant="filled"
                  />
                </div>
                <span className="top__span">Forgot Password</span>
              </div>
            </form>
            <NavLink to={"/"} className="login__btn">
              <Button className="login__btn" variant="contained">
                Kirish
              </Button>
            </NavLink>
            <span className="top__span__center">or contunio with</span>
          </div>
          <div className="login__wrapper__bottom">
            <span>Don't have an account yet?</span>
            <p>Register for free</p>
          </div>
        </div>
      </div>
      <NavLink to={"/downloadLogin"} className="download__absolute">
        <GiSaveArrow />
        <p>sertifikatni yuklab olish</p>
      </NavLink>
    </div>
  );
};

export default Login;
