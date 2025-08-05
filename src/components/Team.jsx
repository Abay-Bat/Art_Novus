import React from "react";
import logo from "../assets/logo.png";

const Team = () => {
  return (
    <section id="team" className="py-12 bg-n-7 text-center">
      <h2 className="h2 mb-8 text-color-1">Наш адрес</h2>

      <div className="flex justify-center px-4">
        <div className="bg-n-8 border border-n-6 p-6 rounded-2xl w-full sm:w-2/3 lg:w-1/2">
          <img
            src={logo}
            alt="Логотип"
            className="w-45 h-10 mx-auto mb-3 rounded-full object-cover"
          />
          <p className="text-base text-n-3 mb-4">
            ЖК Сатти, Микрорайон Самал-2, 58, 12 этаж
          </p>
          <a
            href="https://2gis.kz/almaty/firm/70000001098570048"
            target="_blank"
            rel="noopener noreferrer"
            className="text-color-1 hover:underline break-all"
          >
            Посмотреть на карте
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
