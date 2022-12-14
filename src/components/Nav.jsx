import React from "react";
import logo from "../assets/logo.png";
import SideBar from "./SideBar";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="absolute top-2 text-white w-full flex justify-between items-center p-2">
      <img src={logo} alt="logo" className="w-8 lg:w-auto" />
      <ul className=" hidden lg:flex space-x-4 items-center text-lg ">
        <Link to="sobre" smooth={true} duration={500}>
          {" "}
          <li className="lg:hover:cursor-pointer">Sobre</li>
        </Link>
        <Link to="services" smooth={true} duration={500}>
          {" "}
          <li className="lg:hover:cursor-pointer">Serviços</li>
        </Link>
        <Link to="portfolio" smooth={true} duration={500}>
          {" "}
          <li className="text-secondary lg:hover:cursor-pointer">Portólio</li>
        </Link>
      </ul>
      <AiOutlineMenu className="lg:hidden text-xl text-secondary-white" />

      <Link to="contact" smooth={true} duration={500}>
        <button
          type="button"
          className="hidden lg:block  border border-secondary  text-secondary h-10 p-2"
        >
          Contate-me
        </button>
      </Link>
    </nav>
  );
};

export default Nav;
