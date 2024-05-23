import React from "react";
import privateimg from "../../assets/images/sertifikate.png";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import personalimg from "../../assets/images/personal.png";

const PrivateOffice = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${privateimg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="private"
    >
      <div className="container">
        <div className="private__wrapper">
          <div className="private__wrapper__top">
            <h2>Shaxsiy ma'lumot</h2>
            <NavLink to={"/"}>
              <Button variant="outlined">Bosh sahifaga qaytish</Button>
            </NavLink>
          </div>
          <div className="private__wrapper__bottom">
            <img src={personalimg} alt="" />
            <div className="private__bottom__right">
              <table>
                <thead>
                  <tr>
                    <th>FIO</th>
                    <th>Natasha Aliyeva</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tug'ilgan kun</td>
                    <td>28-070199</td>
                  </tr>
                  <tr>
                    <td>Jinsi</td>
                    <td>Ayol</td>
                  </tr>
                  <tr>
                    <td>Manzil</td>
                    <td>Toshkent shahar,Yunusobod 1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateOffice;
