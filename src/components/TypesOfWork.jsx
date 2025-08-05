import React, { useState } from "react";
import { Plus, Minus } from "lucide-react"; // optional, if you use lucide icons

const workDetails = [
  {
    title: "ЭЛЕКТРОМОНТАЖНЫЕ РАБОТЫ",
    items: [
      "Разводка проводки",
      "Сборка и монтаж электрощитка",
      "Замена или установка розеток и выключателей",
      "Установка светильников и люстр",
    ],
  },
  {
    title: "ЧЕРНОВАЯ ОТДЕЛКА",
    items: [
      "Стяжка пола",
      "Выравнивание потолка и стен",
      "Штукатурка стен",
      "Возведение межкомнатных перегородок",
      "Работы с гипсокартоном",
    ],
  },
  {
    title: "САНТЕХНИЧЕСКИЕ РАБОТЫ",
    items: [
      "Разводка сантехнических труб",
      "Установка сантехники",
      "Установка раковин, ванной, унитаза",
      "Установка полотенцесушителя",
      "Подключение бытовые техники",
      "Замена радиаторов отопления",
    ],
  },
  {
    title: "ЧИСТОВАЯ ОТДЕЛКА",
    items: [
      "Шпаклевка стен и потолка",
      "Монтаж натяжного потолка",
      "Покраска стен или поклейка обоев",
      "Монтаж напольного покрытия",
      "Установка плинтусов",
      "Установка оконных откосов",
      "Монтаж межкомнатных дверей",
    ],
  },
  {
    title: "ПРОЧИЕ РАБОТЫ",
    items: [
      "Доставка и подъем материалов",
      "Вывоз строительного мусора",
      "Клининговая уборка",
    ],
  },
];

const TypesOfWork = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-n-7 text-n-1" id="types-of-work">
      <div className="text-center mb-12 px-4">
        <h2 className="h2 text-color-1 mb-4">Виды работ</h2>
        <p className="text-n-3 text-base max-w-xl mx-auto">
          Нажмите на категорию, чтобы увидеть список работ, которые мы выполняем
          в рамках каждого типа ремонта.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 space-y-6">
        {workDetails.map((section, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-2xl border border-n-6 bg-n-8 shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left uppercase font-semibold text-base text-white hover:bg-n-6 transition-all"
              >
                <span>{section.title}</span>
                {isOpen ? (
                  <Minus className="w-5 h-5 text-color-1" />
                ) : (
                  <Plus className="w-5 h-5 text-white" />
                )}
              </button>

              {isOpen && (
                <ul className="px-8 pb-6 pt-2 text-sm text-n-3 space-y-2 list-disc list-inside animate-fade-in">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TypesOfWork;
