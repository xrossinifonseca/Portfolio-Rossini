import React, { useRef } from "react";
import {
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_m0prj0a",
      "template_d73fqhl",
      form.current,
      "yznrleLcUjc5JIRW1"
    );
    e.target.reset();
    alert("Menssagem enviada com sucesso!");
  };

  return (
    <section
      name="contact"
      className="w-full h-auto mt-10 bg-secondary-blue p-4"
    >
      <h1 className="text-center text-secondary text-4xl mt-10">CONTATO</h1>
      <div className=" sm:flex flex-col items-center mt-4">
        <article className=" sm:w-1/2 flex  items-center justify-center text-4xl space-x-4 ">
          <a
            href="https://api.whatsapp.com/send?phone=55021994252014"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineWhatsApp className="text-green-500" />
          </a>
          <a
            href="https://github.com/xrossinifonseca"
            rel="noreferrer"
            target="_blank"
          >
            <AiFillGithub className="text-orange-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/rossini-fonseca/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="text-blue-500" />
          </a>

          <a
            href="https://www.instagram.com/rossinifonsec/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram className="text-pink-800" />
          </a>
        </article>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full sm:w-1/2 flex flex-col items-center justify-center space-y-4 text-secondary-white mt-10"
        >
          <input
            type="text"
            name="name"
            placeholder="nome completo"
            required
            className="w-full lg:w-1/2 h-10 rounded bg-transparent border border-secondary p-2"
          />
          <input
            type="email"
            name="email"
            placeholder="seu email"
            required
            className="w-full lg:w-1/2 h-10 rounded bg-transparent border border-secondary p-2"
          />
          <textarea
            name="message"
            rows="7"
            placeholder="sua mensagem"
            required
            className="w-full lg:w-1/2 rounded border border-secondary bg-transparent p-2"
          ></textarea>
          <button
            type="submit"
            className="w-auto p-2 text-secondary-white bg-secondary h-10 rounded font-light"
          >
            <b>enviar mensagem</b>
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
