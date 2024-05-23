import React from "react";
import sertifikatimg from "../../assets/images/sertifikate.png";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Sertifikat = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${sertifikatimg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="sertifikat"
    >
      <div className="sertifikate__container">
        <div className="sertifikat__wrapper">
          <div className="sertifikat__wrapper__top">
            <h2>Sertifikat</h2>
            <table>
              <thead>
                <tr>
                  <th>FIO</th>
                  <th>№</th>
                  <th>O‘qish davri</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mahmanazarov Bexro‘z Yusuf o‘g‘li</td>
                  <td>2MO № 00000003</td>
                  <td>2023.05.15/2024.05.15</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sertifikat__wrapper__bottom">
            <NavLink>
              <Button variant="contained">Yuklab olish</Button>
            </NavLink>
            <NavLink to={"/downloadLogin"}>
              <Button variant="outlined">Ortga qaytish</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sertifikat;
