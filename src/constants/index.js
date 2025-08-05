import { href } from "react-router-dom";
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  autocad,
  sketchup,
  miro,
  trello,
  whatsapp,
  whatsapp_gray,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Возможности", // Features
    url: "#features",
  },
  {
    id: "1",
    title: "Цены", // Pricing
    url: "#pricing",
  },
  {
    id: "4",
    title: "услуги", // Types of work
    url: "#types-of-work",
  },
  {
    id: "2",
    title: "Местоположение", // Team/Location
    url: "#team",
  },
  {
    id: "3",
    title: "instagram", // New account
    url: "https://www.instagram.com/artnovus_kz?igsh=aHJxdW54MXRhdmMw&utm_source=qr",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const collabText =
  "С ArtNovus ремонт становится простым, прозрачным и безопасным.";

export const collabContent = [
  {
    id: "0",
    title: "Интеграция с комфортом",
    text: collabText,
  },
  {
    id: "1",
    title: "Умный подход к ремонту",
  },
  {
    id: "2",
    title: "Прозрачность и контроль",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "1",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "2",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "3",
    title: "AutoCAD",
    icon: autocad, // you'd need to add this icon to your assets
    width: 36,
    height: 36,
  },
  {
    id: "4",
    title: "SketchUp",
    icon: sketchup, // add icon to assets
    width: 36,
    height: 36,
  },
  {
    id: "5",
    title: "Miro",
    icon: miro, // add icon to assets
    width: 36,
    height: 36,
  },
  {
    id: "6",
    title: "Trello",
    icon: trello, // add icon to assets
    width: 36,
    height: 36,
  },
  {
    id: "7",
    title: "WhatsApp",
    icon: whatsapp, // add icon to assets
    width: 36,
    height: 36,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Базовый",
    description: "Онлайн-консультация и предварительный расчёт",
    pricePerM2: 125000,
    features: [
      "Бесплатная консультация по ремонту",
      "Индивидуальные рекомендации по материалам и дизайну",
      "Ознакомление с платформой и её возможностями",
    ],
  },
  {
    id: "1",
    title: "Премиум",
    description: "Полное сопровождение, 3D-дизайн, приоритетная поддержка",
    pricePerM2: 165000,
    features: [
      "Персональный менеджер проекта",
      "3D-дизайн и визуализация интерьера",
      "Приоритетная поддержка и контроль сроков",
    ],
  },
  {
    id: "2",
    title: "Бизнес",
    description: "Индивидуальные решения, комплексный ремонт под ключ",
    pricePerM2: 200000,
    features: [
      "Персонализированный подход под ваш проект",
      "Полный цикл работ от идеи до сдачи объекта",
      "Выделенный менеджер и расширенные возможности контроля",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Вы сэкономите на материалах до 20%",
    text: "У нас наработанная база поставщиков, которые предоставляют нам скидки 15-20% на все товары. Поэтому покупать с нами выгодно.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "1",
    title: "Соблюдаем сроки",
    text: "Сроки выполнения всех работ мы заранее прописываем в смете и согласовываем с заказчиком. За каждый день просрочки заплатим 1% от общей суммы.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "2",
    title: "Гарантируем качество",
    text: "Даем гарантию на услуги и закупленные нами материалы на 1 год. Если что-то испортится или появятся недочеты – все исправим за свой счёт.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "3",
    title: "Опытная команда",
    text: "Все наши мастера занимаются ремонтными работами не менее 5 лет. В команде есть профессиональные сантехники, электрики и отделочники.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "4",
    title: "Официальное оформление",
    text: "Заключаем официальный договор с прописанными обязательствами и гарантиями. Это защищает ваши права и нашу репутацию.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "5",
    title: "Высокое качество работ",
    text: "Соблюдаем все строительные нормы РК и применяем современные технологии для качественного и надёжного ремонта.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/artnovus_kz?igsh=aHJxdW54MXRhdmMw&utm_source=qr",
  },
  {
    id: "1",
    title: "WhatsApp",
    iconUrl: whatsapp_gray, // If this is still a Telegram icon, update it to a WhatsApp icon if available
    url: "https://wa.me/77000606290",
  },
];
