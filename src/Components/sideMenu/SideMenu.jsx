import React from "react";
import "./sidemenu.css";
import { Link } from "react-scroll";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineMessage,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

function SideMenu() {
  return (
    <div className="container">
      <ul className="list">
        <Link to="home" smooth={true} duration={500}>
          <li>
            <AiOutlineHome />
          </li>
        </Link>
        <Link to="sobre" smooth={true} duration={500}>
          <li>
            <CgProfile />
          </li>
        </Link>
        <Link to="projetos" smooth={true} duration={500}>
          <li>
            <AiOutlineFundProjectionScreen />
          </li>
        </Link>
        <Link to="contato" smooth={true} duration={500}>
          <li>
            <AiOutlineMessage />
          </li>
        </Link>
      </ul>
    </div>
  );
}
export default SideMenu;
