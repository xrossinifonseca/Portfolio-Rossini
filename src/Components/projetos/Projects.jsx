import React from "react";
import "./projects.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import burguerApp from "../img/burguer-script.png";
import barbershop from "../img/barbershop.png";
import drop from "../img/drop-project.png";

function Projects() {
  return (
    <section name="projetos" className="containerProject">
      <h1>PROJETOS</h1>

      <div className="fildsProject">
        <div className="fild">
          <a
            href="https://burguer-ecommerce.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="box">
              <img
                src={burguerApp}
                alt="burguer-ecommerce"
                className="project-img"
              />
            </div>
          </a>
          <h3>hamburgueria</h3>
          <a
            href="https://burguer-ecommerce.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="explorar"
          >
            <p>explorar projeto</p>
            <AiOutlineArrowRight className="arrow-icon" />
          </a>
        </div>
        <div className="fild">
          <a
            href="https://dropdown-eight.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="box">
              <img src={drop} alt="landing-page" className="project-img" />
            </div>
          </a>
          <h3>Landing page</h3>
          <a
            href="https://dropdown-eight.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="explorar"
          >
            <p>explorar projeto</p>
            <AiOutlineArrowRight className="arrow-icon" />
          </a>
        </div>
        <div className="fild">
          <a
            href="https://barber-shop-agendamento.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="box">
              <img src={barbershop} alt="barber" className="project-img" />
            </div>
          </a>
          <h3>Barber shop</h3>
          <a
            href="https://barber-shop-agendamento.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="explorar"
          >
            <p>explorar projeto</p>
            <AiOutlineArrowRight className="arrow-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
export default Projects;
