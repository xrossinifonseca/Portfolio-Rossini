import React from "react";
import "./sobreMin.css";
import { BsGithub, BsTools } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";

import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { SiStyledcomponents } from "react-icons/si";

import cv from "../../cv/Rossini-Fonseca.pdf";
import perfil from "../img/main.png";

function SobreMim() {
  return (
    <section name="sobre" className="container-sobre">
      <div className="about-info">
        <div className="content_text">
          <h1>Sobre Mim</h1>
          <p>
            Seja bem vindo ao meu portfólio. Me chamo Rossini Fonseca e atuo
            como desenvolvedor de software há mais de um ano e meio, atuando em
            projetos freelacers e projetos pessoais. Tenho como objetivo trazer
            soluções e inovações para empresas e clientes, criando ou trazendo
            melhores e novas funcionalidades para sistemas de softwares. Utilizo
            as melhores ferramentas do mercado visando uma melhor perfomance em
            minhas aplicações. possuo conhecimento em criação e consumo de API
            Rest, desenvolvimento frontend e backend, Ui Design e praticas de
            clean code.
          </p>

          <div className="btn">
            <button type="button">
              <a
                href={cv}
                download="rossini-fonseca.pdf"
                type="application/pdf"
              >
                currículo cv
              </a>
            </button>
          </div>
        </div>

        <div className="info-img">
          <img src={perfil} alt="logo" />
        </div>
      </div>
      <div className="skills">
        <h1>Habilidades Técnicas</h1>

        <div className="skills-set">
          <div className="box-desc">
            <BsTools size={30} />
            <h3>Front-end</h3>
            <p>
              React | Tailwindcss | Axios | Html | Css | Styled-components |
              Javascript
            </p>
          </div>
          <div className="box-desc">
            <BsGithub size={30} />
            <h3>Backend</h3>
            <p>Nodejs | Express | MongoDB | Mongoose</p>
          </div>
          <div className="box-desc">
            <MdComputer size={30} />
            <h3>UI Design</h3>
            <p>Figma</p>
          </div>
        </div>
      </div>
      <div className="stack">
        <span>
          <IoLogoJavascript />
        </span>
        <span>
          <FaReact />
        </span>
        <span>
          <IoLogoNodejs />
        </span>
        <span>
          <TbBrandNextjs />
        </span>
        <span>
          <SiStyledcomponents />
        </span>
      </div>
    </section>
  );
}

export default SobreMim;
