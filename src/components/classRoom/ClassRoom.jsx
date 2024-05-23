import React from "react";
import classroomimg from "../../assets/images/classroom.png";

const ClassRoom = () => {
  return (
    <div className="classroom">
      <div className="homeContainer">
        <div className="classroom__wrapper">
          <div className="classroom__left">
            <h2 className="classroom__left__title">
              TRANSPORT SOHASIDA KADRLARNI QAYTA TAYYORLASH VA ULARNING
              MALAKASINI OSHIRISH HAMDA ILMIY VA INNOVATSION FAOLIYAT TIZIMINI
              TASHKIL ETISH CHORA-TADBIRLARI TO‘G‘RISIDA
            </h2>
            <p className="classroom__left__text">
              Mamlakatimizda transport va yo‘l xo‘jaligi sohasida xodimlarni
              tayyorlash, qayta tayyorlash, ularning malakasini oshirish
              tizimini tubdan isloh qilish maqsadida ilg‘or xorijiy tajribani
              qo‘llagan holda o‘quv jarayoniga yangi ta’lim uslublarini,
              zamonaviy axborot texnologiyalarini keng joriy etish borasida
              tizimli ishlar amalga oshirilmoqda.
            </p>
            <p className="classroom__text">
              Shu bilan birga, bugungi kunda transport sohasida ta’lim
              oluvchilarga keng imkoniyatlar va qulay sharoitlar yaratish, soha
              kadrlarining bilim va ko‘nikmalarini oshirish, shuningdek,
              kadrlarni qayta tayyorlash hamda ularning malakasini oshirish
              jarayonlarini ishlab chiqarish bilan uzviy bog‘liq holda amalga
              oshirish talab etilmoqda.
            </p>
          </div>
          <img
            className="classroom__right"
            src={classroomimg}
            alt="classroom"
          />
        </div>
      </div>
    </div>
  );
};

export default ClassRoom;
