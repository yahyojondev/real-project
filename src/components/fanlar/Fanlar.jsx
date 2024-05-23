import { Button } from "@mui/material";
import React from "react";
import fanlar1 from "../../assets/images/fanlarbottom1.png";
import fanlar2 from "../../assets/images/fanlarbottom2.png";
import fanlar3 from "../../assets/images/fanlarbottom3.png";
import fanlar4 from "../../assets/images/fanlarbottom4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { fanlarproducts } from "../../static/route";
import { FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Fanlar = () => {
  const fanlarItem = fanlarproducts?.map((el) => (
    <SwiperSlide key={el.id}>
      <div className="fanlar__card">
        <img src={el.img} alt="" />
        <div className="fanlar__card__content">
          <p>{el.text}</p>
          <h3>{el.title}</h3>
          <button className="fanlar__btn">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </SwiperSlide>
  ));
  return (
    <div className="fanlar">
      <div className="homeContainer">
        <div className="fanlar__wrapper">
          <div className="fanlar__top">
            <h2>FANLAR</h2>
          </div>
          <div className="fanlar__center">
            <Swiper
              slidesPerView={3}
              navigation={true}
              spaceBetween={10}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  //   spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  //   spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  //   spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 3,
                  //   spaceBetween: 50,
                },
              }}
              modules={[Autoplay, Navigation, Pagination]}
              className="mySwiper"
            >
              {fanlarItem}
            </Swiper>
          </div>
          <div className="fanlar__bottom">
            <NavLink to={"/lessonTables"}>
              <Button variant="outlined">Barcha modullarni ko'rish</Button>
            </NavLink>
            <div className="images__wrapper">
              <img src={fanlar1} alt="" />
              <img src={fanlar2} alt="" />
              <img src={fanlar3} alt="" />
              <img src={fanlar4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fanlar;
