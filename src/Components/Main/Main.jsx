import React from "react";
import "./main.css";
import { Link } from "react-scroll";
import ligth from "../img/logo-lumi.png";

function Main() {
  return (
    <div className="about">
      <div className="info">
        <h1>
          HI, <br />
          I'M SOFTWARE DEVELOPER.
        </h1>
        <h3>Rossini Fonseca</h3>

        <Link to="sobre" smooth={true} duration={500}>
          <button className="btn-main">Sobre mim</button>
        </Link>
      </div>

      <div className="perfil">
        <img src={ligth} alt="foto perfil" />
      </div>
    </div>
  );
}
export default Main;
