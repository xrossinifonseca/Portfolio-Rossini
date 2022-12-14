import React from "react";
import { useState } from "react";
import { projects } from "../helpers/services";

const Portfolio = () => {
  return (
    <section name="portfolio" className="w-full sm:flex pt-10 p-4">
      <article className="sm:w-1/2 flex flex-col items-center justify-center relative">
        <h1 className="text-secondary text-4xl">PORTFÓLIO</h1>
        <span className="text-secondary-white mt-4">
          Alguns de meus projetos desenvolvido.
        </span>
        <button
          type="button"
          className="hidden sm:block border border-secondary  text-secondary h-10 mt-2 p-2"
        >
          conheça todos
        </button>
      </article>
      <article className="mt-4 sm:mt-0 sm:w-1/2 flex items-center">
        {projects.map((project) => (
          <div key={project.id} className="relative ">
            <img
              src={project.image}
              className="hover:opacity-50"
              alt="projetos"
            />
            {/* <span className=" absolute top-10 flex flex-col justify-center items-end">
              <h1 className="text-secondary">{project.name}</h1>
              <button
                type="button"
                className="w-28  text-medium border border-secondary  text-secondary h-10 p-2 mt-4"
              >
                conhecer
              </button>
            </span> */}
          </div>
        ))}
      </article>
    </section>
  );
};

export default Portfolio;
