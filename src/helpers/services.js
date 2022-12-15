import front from "../assets/front.png";
import back from "../assets/back.png";
import git from "../assets/git.png";
import figma from "../assets/figma.png";
import javascript from "../assets/javascript-icon.png";
import react from "../assets/react-icon.png";
import next from "../assets/next-icon.png";
import tailwind from "../assets/tailwind-icon.png";
import css from "../assets/css-icon.png";
import html from "../assets/html-icon.png";
import node from "../assets/node-icon.png";
import mongo from "../assets/mongo-icon.png";
import mysql from "../assets/mysql-icon.png";
import jest from "../assets/jest-icon.png";

import barber from "../assets/barber-shop.png";
import food from "../assets/food-club.png";
import drop from "../assets/dropdown.png";

export const services = [
  {
    id: 1,
    name: "Desenvolvimento front-end",
    img: front,
  },
  { id: 2, name: "Desenvolvimento Back-end", img: back },
  {
    id: 3,
    name: "Versionamento Git/Github",
    img: git,
  },
  {
    id: 4,
    name: "Figma Design",
    img: figma,
  },
];

export const skillsFront = [
  { id: 1, name: "Javascript", img: javascript },
  { id: 2, name: "React", img: react },
  {
    id: 3,
    name: "Next.js",
    img: next,
  },
  { id: 4, name: "Tailwindcss", img: tailwind },
  { id: 5, name: "Css", img: css },
  { id: 6, name: "Html", img: html },
];

export const skillsBack = [
  { id: 1, name: "Nodejs", img: node },
  { id: 2, name: "MongoDb", img: mongo },
  {
    id: 3,
    name: "MySql",
    img: mysql,
  },
  { id: 4, name: "Jest", img: jest },
  { id: 5, name: "Express", img: "" },
];

export const projects = [
  {
    id: 1,
    name: "Barber Shop",
    img: barber,
    url: "https://barber-shop-agendamento.vercel.app/",
  },
  {
    id: 2,
    name: "Food-club",
    img: food,
    url: "https://foodcluburger.vercel.app/",
  },
  {
    id: 3,
    name: "Dropdown",
    img: drop,
    url: "https://dropdown-eight.vercel.app/",
  },
];
