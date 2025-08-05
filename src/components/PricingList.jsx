import { useState } from "react";
import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  const [square, setSquare] = useState(""); // store as string

  return (
    <div className="flex flex-col gap-[2rem] max-lg:flex-wrap">
      <div className="mb-6">
        <label className="block mb-2 font-medium text-n-1">
          Введите площадь в м²:
        </label>
        <input
          type="number"
          min="0"
          placeholder="Например: 55"
          value={square}
          onChange={(e) => setSquare(e.target.value)}
          className="w-full max-w-xs p-2 rounded border border-n-6 bg-n-7 text-n-1"
        />
      </div>

      <div className="flex gap-[1rem] max-lg:flex-wrap">
        {pricing.map((item) => {
          const sq = parseFloat(square);
          const isValid = !isNaN(sq) && sq > 0;
          const total = isValid ? item.pricePerM2 * sq : 0;

          return (
            <div
              key={item.id}
              className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
            >
              <h4 className="h4 mb-4">{item.title}</h4>

              <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
                {item.description}
              </p>

              <div className="flex items-center justify-center h-[4rem] mb-6">
                {isValid ? (
                  <div className="text-xl font-semibold text-center text-n-1 whitespace-pre-line leading-snug">
                    {item.pricePerM2.toLocaleString()} × {sq} ={" "}
                    {total.toLocaleString()} ₸
                  </div>
                ) : (
                  <div className="text-sm text-n-1/40 text-center">
                    Введите площадь для расчёта
                  </div>
                )}
              </div>

              <div className="mb-6">
                <Button
                  className="w-full"
                  href="https://wa.me/77477871077"
                  white
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Связаться с нами
                </Button>
              </div>

              <ul>
                {item.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start py-5 border-t border-n-6"
                  >
                    <img src={check} width={24} height={24} alt="Check" />
                    <p className="body-2 ml-4">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingList;
