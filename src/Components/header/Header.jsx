import React from "react";
import styles from "./Header.module.css";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineMenu,
} from "react-icons/ai";
import { useState } from "react";
import SideMenu from "../sideMenu/SideMenu";

function Header() {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    menu ? setMenu(false) : setMenu(true);
  };

  return (
    <div name="home" className={styles.header}>
      <div className={styles.icons}>
        <a href="https://www.linkedin.com/in/rossini-fonseca/" target="blank">
          <AiOutlineLinkedin />
        </a>

        <a href="https://www.instagram.com/rossinifonsec/" target="blank">
          <AiOutlineInstagram />
        </a>

        <a href="https://github.com/xrossinifonseca" target="blank">
          <AiFillGithub />
        </a>
      </div>
      <AiOutlineMenu className={styles.menu} onClick={showMenu} />
      {menu && <SideMenu active={setMenu} />}
    </div>
  );
}
export default Header;
