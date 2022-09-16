import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
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
    <>
      <section name="contato" className="container_contact">
        <h1>CONTATO</h1>
        <div className="content_msg">
          <div className="content_opt">
            <div className="boxLink">
              <article className="option_msg">
                <MdOutlineMail />
                <h4>Email</h4>
                <h5>rossinidrum@outlook.com</h5>
                <a
                  href="mailto:rossinidrum@outlook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>Mande uma mensagem.</b>
                </a>
              </article>
              <article className="option_msg">
                <BsWhatsapp />
                <h4>Whatsapp</h4>
                <h5>+55 (21) 994252014</h5>
                <a
                  href="https://api.whatsapp.com/send?phone=55021994252014"
                  rel="noreferrer"
                  target="_blank"
                >
                  <b>Mande uma mensagem.</b>
                </a>
              </article>
            </div>

            <div className="boxLink">
              <article className="option_msg">
                <AiOutlineLinkedin />
                <h4>Linkedin</h4>
                <h5>Rossini Fonseca</h5>
                <a
                  href="https://www.linkedin.com/in/rossini-fonseca/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>Mande uma mensagem.</b>
                </a>
              </article>
              <article className="option_msg">
                <AiFillGithub />
                <h4>GitHub</h4>
                <h5>xrossinifonseca</h5>
                <a
                  href="https://github.com/xrossinifonseca"
                  rel="noreferrer"
                  target="_blank"
                >
                  <b>Visitar repositório</b>
                </a>
              </article>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="form_contato">
            <input
              type="text"
              name="name"
              placeholder="nome completo"
              required
            />
            <input type="email" name="email" placeholder="seu email" required />
            <textarea
              name="message"
              rows="7"
              placeholder="sua mensagem"
              required
            ></textarea>
            <button type="submit" className="btn_enviar">
              <b>enviar mensagem</b>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default Contact;
