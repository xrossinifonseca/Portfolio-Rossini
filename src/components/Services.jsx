import React from "react";
import coding from "../assets/coding.gif";
import { services } from "../helpers/services";

const Services = () => {
  return (
    <section name="services" className="w-full bg-secondary-blue lg:flex ">
      <article className="w-full flex flex-col items-center  lg:w-1/2 mt-10 p-4">
        <h1 className="text-secondary  text-3xl">SERVIÇOS</h1>
        <div className="space-y-5 sm:space-y-0 sm:grid grid-cols-2 gap-x-4 gap-y-4 p-2 ">
          {services.map((service) => (
            <div
              key={service.id}
              className=" w-[200px] h-[200px]   border border-secondary rounded flex flex-col justify-center items-center space-y-2"
            >
              <h1 className="text-secondary text-[14px]">{service.name}</h1>
              <img src={service.img} alt="meus serviços" />
            </div>
          ))}
        </div>
      </article>
      <article className="hidden lg:flex justify-center items-center  ">
        <img src={coding} alt="gif codando" />
      </article>
    </section>
  );
};

export default Services;
