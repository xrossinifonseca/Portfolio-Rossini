import React from "react";
import "./projects.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import burguerApp from "../img/burguer-script.png";
import fruitStore from "../img/fruit-store.png";
import crud from "../img/crud.png";

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
          <h3>Dev hamburgueria</h3>
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
            href="https://github.com/xrossinifonseca/CRUD-BASICO"
            target="_blank"
            rel="noreferrer"
          >
            <div className="box">
              <img src={crud} alt="projeto-crud" className="project-img" />
            </div>
          </a>
          <h3>Lista de usuários</h3>
          <a
            href="https://github.com/xrossinifonseca/CRUD-BASICO"
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
            href="https://fruitstore.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="box">
              <img
                src={fruitStore}
                alt="fruit-ecommerce"
                className="project-img"
              />
            </div>
          </a>
          <h3>Fruit Store</h3>
          <a
            href="https://fruitstore.vercel.app/"
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
