import React from "react";
import "./footer.css";
import { Link } from "react-scroll";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiFillGithub,
} from "react-icons/ai";
function Footer() {
  return (
    <footer className="footer">
      <ul className="permaLink">
        <li>
          <Link Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link Link to="sobre" smooth={true} duration={500}>
            Sobre
          </Link>
        </li>
        <li>
          <Link Link to="projetos" smooth={true} duration={500}>
            Projetos
          </Link>
        </li>
        <li>
          <Link Link to="contato" smooth={true} duration={500}>
            Contato
          </Link>
        </li>
      </ul>

      <div className="footer_social">
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

      <div className="footer_copyright">
        <small>&copy; ROSSINI FONSECA</small>
      </div>
    </footer>
  );
}
export default Footer;
