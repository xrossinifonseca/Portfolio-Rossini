import React from "react";
import { projects } from "../helpers/services";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Portfolio = () => {
  return (
    <section
      name="portfolio"
      className="w-full flex-col items-center justify-center pt-10 p-4"
    >
      <article className=" flex flex-col items-center justify-center relative">
        <h1 className="text-secondary text-4xl">PORTFÓLIO</h1>
        <span className="text-secondary-white mt-4">
          Alguns projetos desenvolvido.
        </span>
      </article>

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {projects.map((project) => (
          <SwiperSlide
            key={project.id}
            className="w-full lg:w-1/2 flex items-center justify-center mt-4"
          >
            <a
              href={project.url}
              rel="noreferrer"
              target="_blank"
              className="flex justify-center "
            >
              <img src={project.img} className="lg:w-1/2 " alt="projetos" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full flex items-center justify-center mt-4">
        <button
          type="button"
          className=" border border-secondary  text-secondary h-10 mt-2 p-2"
        >
          <a
            href="https://github.com/xrossinifonseca"
            rel="noreferrer"
            target="_blank"
          >
            conheça todos
          </a>
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
