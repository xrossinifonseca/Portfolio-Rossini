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
          Olá, sou desenvolvedor de software com foco em desenvolvimento web com
          mais de 1 ano e 6 meses na área, sendo 1 ano atuando como
          desenvolvedor frontend em projetos freelancers e me dedicando a 6
          meses como desenvolvedor backend. Tenho como objetivo desenvolver
          soluções técnicas, tornando problemas em soluções, corrigindo erros e
          proporcionando sempre melhorias em sistemas existentes. Possuo
          expêriencia no desenvolvimento de aplicações com React, onde utilizo
          das melhores ferramentas do frontend para criações de interfaces de
          usuário, possuo conhecimento no desenvolvimento banckend com Nodejs,
          banco de dados relacionais e não relacionas (mysql, mongodb),
          conhecimento em práticas de clean code e implementação de teste
          uniários. Entre em contato comigo para me conhecer um pouco mais.
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
