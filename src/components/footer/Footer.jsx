import React from "react";
import footerimg from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer__img" src={footerimg} alt="" />
      <div className="homeContainer">
        <div className="footer__wrapper">
          <div className="footer__wrapper__top">
            <h2>MARKAZ HAQIDA</h2>
            <p>Manzil: Toshkent shahar, Shirin-ariq 49-uy</p>
            <span>Tel: +998(91)283-77-08</span>
          </div>
          <div className="footer__wrapper__bottom">
            <p>
              Malaka oshirish, Kadrlar malakasini oshirish va ularni qayta
              tayyorlash (OʻzRda) — uzluksiz taʼlim tizimi turlaridan biri, xalq
              xoʻjaligining barcha sohasida ishlovchi mutaxassislar va rahbar
              xodimlarning kasbiy bilim va koʻnikmalarini yangilash hamda
              chuqurlashtirish jarayoni. Kadrlarning raqobatbardoshlik sifatlari
              hamda bilim va koʻnikmalarining zamon talablariga javob bera
              oladigan darajada boʻlishini taʼminlaydi. Malaka oshirish va qayta
              tayyorlash har bir xodimning oʻz mutaxassisligi boʻyicha soʻnggi
              fan yutuklari, yangiliklari bilan tanishish, ularni oʻzlashtirish,
              yangi amaliy ish usullari, ilgʻor ish tajribalarini oʻrganishdan
              iborat ilmiy nazariy hamda amaliy tayyorgarlik jarayoni
              hisoblanadi. 
            </p>
          </div>
        </div>
      </div>
      <img className="footer__img" src={footerimg} alt="" />
    </div>
  );
};

export default Footer;
