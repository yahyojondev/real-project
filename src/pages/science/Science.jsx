import { Button } from "@mui/material";
import React from "react";
import scienceimg from "../../assets/images/sertifikate.png";
import { NavLink } from "react-router-dom";

const Science = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${scienceimg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="science"
    >
      <div className="container">
        <div className="science__wrapper">
          <div className="science__top">
            <NavLink to={"/"}>
              <Button variant="outlined">Bosh sahifaga qaytish</Button>
            </NavLink>
            <select id="">
              <option value="2023-2024-yil">2023-2024-yil</option>
              <option value="2023-2024-yil">2022-2023-yil</option>
              <option value="2023-2024-yil">2021-2022-yil</option>
            </select>
          </div>
          <div className="science__bottom">
            <table>
              <thead>
                <tr>
                  <th>Fanlar</th>
                  <th>O'qituvchi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Metropoliten vagonlarning elektr jihozlari</td>
                  <td>Abdurashidov Abdug’ani</td>
                </tr>
                <tr>
                  <td>Metropoliten vagonlarning elektr jihozlari</td>
                  <td>Abdurashidov Abdug’ani</td>
                </tr>
                <tr>
                  <td>Metropoliten vagonlarning elektr jihozlari</td>
                  <td>Abdurashidov Abdug’ani</td>
                </tr>
                <tr>
                  <td>Metropoliten vagonlarning elektr jihozlari</td>
                  <td>Abdurashidov Abdug’ani</td>
                </tr>
                <tr>
                  <td>Metropoliten vagonlarning elektr jihozlari</td>
                  <td>Abdurashidov Abdug’ani</td>
                </tr>
                <tr>
                  <td>Metropoliten vagonlarning elektr jihozlari</td>
                  <td>Abdurashidov Abdug’ani</td>
                </tr>
                <tr>
                  <td>Metropoliten vagonlarning elektr jihozlari</td>
                  <td>Abdurashidov Abdug’ani</td>
                </tr>
                <tr>
                  <td>Metropoliten vagonlarning elektr jihozlari</td>
                  <td>Abdurashidov Abdug’ani</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Science;
