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
        <li>
          <Link to="home" smooth={true} duration={500}>
            <AiOutlineHome />
          </Link>
        </li>
        <li>
          <Link to="sobre" smooth={true} duration={500}>
            <CgProfile />
          </Link>
        </li>
        <li>
          <Link to="projetos" smooth={true} duration={500}>
            <AiOutlineFundProjectionScreen />
          </Link>
        </li>
        <li>
          <Link to="contato" smooth={true} duration={500}>
            <AiOutlineMessage />
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default SideMenu;
