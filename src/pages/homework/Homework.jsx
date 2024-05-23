import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { MdSaveAlt } from "react-icons/md";
import homeworkimg from "../../assets/images/sertifikate.png";

const Homework = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${homeworkimg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="homework"
    >
      <div className="container">
        <div className="homework__wrapper">
          <div className="homework__wrapper__top">
            <NavLink to={"/"}>
              <Button variant="outlined">Bosh sahifaga qaytish</Button>
            </NavLink>
            <NavLink to={"/science"}>
              <Button variant="outlined">Ortga qaytish</Button>
            </NavLink>
          </div>
          <div className="homework__wrapper__bottom">
            <table>
              <thead>
                <tr>
                  <th>O'qituvchi</th>
                  <th>vazifalar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Abdullaev Nodir</td>
                  <td id="body__text">
                    <div className="vazifalar__wrapper__left">
                      <MdSaveAlt />
                      <p>Vazifa_1.docx</p>
                    </div>
                    <div className="vazifalar__wrapper__right">
                      <input type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Abdullaev Nodir</td>
                  <td id="body__text">
                    <div className="vazifalar__wrapper__left">
                      <MdSaveAlt />
                      <p>Vazifa_1.docx</p>
                    </div>
                    <div className="vazifalar__wrapper__right">
                      <input type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Abdullaev Nodir</td>
                  <td id="body__text">
                    <div className="vazifalar__wrapper__left">
                      <MdSaveAlt />
                      <p>Vazifa_1.docx</p>
                    </div>
                    <div className="vazifalar__wrapper__right">
                      <input type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Abdullaev Nodir</td>
                  <td id="body__text">
                    <div className="vazifalar__wrapper__left">
                      <MdSaveAlt />
                      <p>Vazifa_1.docx</p>
                    </div>
                    <div className="vazifalar__wrapper__right">
                      <input type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Abdullaev Nodir</td>
                  <td id="body__text">
                    <div className="vazifalar__wrapper__left">
                      <MdSaveAlt />
                      <p>Vazifa_1.docx</p>
                    </div>
                    <div className="vazifalar__wrapper__right">
                      <input type="checkbox" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homework;
