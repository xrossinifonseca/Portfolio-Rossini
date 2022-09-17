import React from "react";
import "./sobreMin.css";
import { BsGithub, BsTools } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";

import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { SiStyledcomponents } from "react-icons/si";

import cv from "../../cv/Rossini-Fonseca.pdf";
import perfil from "../img/img-rossini.jpeg";

function SobreMim() {
  return (
    <div name="sobre" className="container-sobre">
      <div className="about-info">
        <div className="content_text">
          <h1>Sobre Mim</h1>
          <p>
            Seja bem vindo ao meu portfólio. Me chamo Rossini Fonseca e atuo
            como desenvolvedor de software desde 2021 com criações e otimizações
            de sites, e-commerce, lading pages e outros sistemas de softwares.
            Possuo como foco desenvolvimento web onde utilizo a linguagem
            javascript em meus projetos. Faço uso do React, Next.js, Html5 e
            Css3 para aplicações no front-end e também possuo conhecimento em
            Node.js com foco em servidores web fazendo uso do express para
            requisições via HTTPS. Meu objetivo como desenvolvedor é trazer
            soluções e criar novas funcionalidades para todos os clientes,
            otimizando interfaces para melhores perfomances e garantir a boa
            experiência ao usuário.
          </p>

          <div className="btn">
            <button type="button">
              <a href={cv} download>
                currículo cv
              </a>
            </button>
          </div>
        </div>

        <div className="info-img">
          <img src={perfil} alt="rossini" />
        </div>
      </div>
      <div className="skills">
        <h1>Serviços</h1>

        <div className="skills-set">
          <div className="box-desc">
            <BsTools size={30} />
            <h3>Desenvolvimento Web</h3>
            <p>
              utilizo React/Next.js no front-end junto com html5 css3 para
              criações e otimizações de interface de usuários
            </p>
          </div>
          <div className="box-desc">
            <BsGithub size={30} />
            <h3>Versionamento GIT</h3>
            <p>Gerenciamento de códigos utlizando Git/Github</p>
          </div>
          <div className="box-desc">
            <MdComputer size={30} />
            <h3>Freelancer</h3>
            <p>Desenvolvimento e otimizações de sistemas Web</p>
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
    </div>
  );
}

export default SobreMim;
