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

import barber from "../assets/barber-project.png";
import food from "../assets/food-project.png";
import drop from "../assets/drop-project.png";

export const services = [
  {
    id: 1,
    name: "Desenvolvimento front-end",
    image: front,
  },
  { id: 2, name: "Desenvolvimento Back-end", image: back },
  {
    id: 3,
    name: "Versionamento Git/Github",
    image: git,
  },
  {
    id: 4,
    name: "Figma Design",
    image: figma,
  },
];

export const skillsFront = [
  { id: 1, name: "Javascript", image: javascript },
  { id: 2, name: "React", image: react },
  {
    id: 3,
    name: "Next.js",
    image: next,
  },
  { id: 4, name: "Tailwindcss", image: tailwind },
  { id: 5, name: "Css", image: css },
  { id: 6, name: "Html", image: html },
];

export const skillsBack = [
  { id: 1, name: "Nodejs", image: node },
  { id: 2, name: "MongoDb", image: mongo },
  {
    id: 3,
    name: "MySql",
    image: mysql,
  },
  { id: 4, name: "Jest", image: jest },
  { id: 5, name: "Express", image: "" },
];

export const projects = [
  {
    id: 1,
    name: "Barber Shop",
    image: barber,
    url: "https://barber-shop-agendamento.vercel.app/",
  },
  {
    id: 2,
    name: "Food-club",
    image: food,
    url: "https://foodcluburger.vercel.app/",
  },
  {
    id: 3,
    name: "Dropdown",
    image: drop,
    url: "https://dropdown-eight.vercel.app/",
  },
];
