import React from "react";
import bannerAbout from "../assets/bannerAbout.png";

const About = () => {
  return (
    <section
      name="sobre"
      className="w-full h-auto lg:h-[550px] flex flex-col lg:flex-row p-2 mt-5 lg:mt-0"
    >
      <article className="w-full lg:w-1/2 flex justify-center items-center">
        <img
          src={bannerAbout}
          alt="teclado ios"
          className=" rounded w-2/4 sm:w-2/5 lg:w-auto"
        />
      </article>
      <article className="w-full h-auto  lg:w-1/2 flex flex-col justify-center  items-center lg:items-start ">
        <h1 className="text-secondary text-xl lg:text-3xl mt-10">SOBRE MIM</h1>
        <p className="font-light text-secondary-white lg:w-4/5 text-center lg:text-justify">
          Meu nome é Rossini Fonseca e atuo com desenvolvimento de software a
          mais de 1 e meio. Tenho como objetivo desenvolver soluções técnicas,
          tornando problemas em soluções, corrindo erros e proporcionando sempre
          melhorias em sistemas existentes. Possuo expêriencia no
          desenvolvimento de aplicações com React, onde utilizo das melhores
          ferramentas do Front-end para criações de interfaces de usuários.tenho
          conheciment no desenvolvimento banckend com Nodejs, banco de dados
          relacionais e não realacionas (mysql, mongodb), aplicações dastécnicas
          de clean code, prática nas implemetações de teste uniários. e
          versionamento git.
        </p>
        <button
          type="button"
          className="w-28 lg:block text-medium border border-secondary  text-secondary h-10 p-2 mt-4"
        >
          Contate-me
        </button>
      </article>
    </section>
  );
};

export default About;
