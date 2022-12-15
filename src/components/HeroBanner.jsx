import React from "react";
import perfilImg from "../assets/profile.png";

const HeroBanner = () => {
  return (
    <section className="w-full">
      <article className="bg-hero-banner w-full h-auto lg:h-[400px] bg-cover bg-center flex flex-col justify-center items-center p-4">
        <img src={perfilImg} alt="perfil" className="w-14 lg:w-28" />
        <h1 className="text-secondary-white  text-xl lg:text-4xl">
          Rossini Fonseca
        </h1>
        <h2 className="text-secondary text-sm lg:text-2xl">
          Desenvolvedor de Software
        </h2>
      </article>
    </section>
  );
};

export default HeroBanner;
