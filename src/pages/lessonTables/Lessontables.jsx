import { Button } from "@mui/material";
import React from "react";
import lessonbg from "../../assets/images/sertifikate.png";
import { NavLink } from "react-router-dom";

const Lessontables = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${lessonbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="lesson"
    >
      <div className="container">
        <div className="lesson__wrapper">
          <div className="lesson__wrapper__top">
            <h2>Dars jadvali</h2>
            <div className="top__right">
              <NavLink>
                <Button variant="outlined">Haftalik</Button>
              </NavLink>
              <NavLink to={"/"}>
                <Button variant="outlined">Bosh sahifaga qaytish</Button>
              </NavLink>
            </div>
          </div>
          <div className="lesson__wrapper__bottom">
            <table>
              <thead>
                <tr>
                  <th style={{ width: "70px" }} className="table__data"></th>
                  <th>Пн 13/05</th>
                  <th>Вт 14/05</th>
                  <th>Ср 15/05</th>
                  <th>Чт 16/05</th>
                  <th>Пт 17/05</th>
                  <th>Сб 18/05</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td id="table__data">8:30</td>
                  <td id="blue"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td id="red">ALS-ARS tizimi</td>
                  <td></td>
                </tr>
                <tr>
                  <td id="table__data"></td>
                  <td id="blue"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td id="red"></td>
                  <td></td>
                </tr>
                <tr>
                  <td id="table__data">10:00</td>
                  <td></td>
                  <td id="yellow">
                    Metropoliten vagonlarning elektrik jixozlari
                  </td>
                  <td></td>
                  <td id="sinyellow"></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td id="table__data"></td>
                  <td></td>
                  <td id="yellow"></td>
                  <td></td>
                  <td id="sinyellow"></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td id="table__data">11:45</td>
                  <td></td>
                  <td></td>
                  <td id="green">
                    Poyezdlarni boshqarish rasional usullari va elektr tortish
                    asoslari
                  </td>
                  <td id="table__data"></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td id="table__data"></td>
                  <td></td>
                  <td></td>
                  <td id="green"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td id="table__data">13:30</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td id="table__data"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td id="table__data"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td id="table__data"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td id="table__data"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td id="table__data"></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessontables;
