import Image from "next/image";
import React from "react";
import Logo2 from "../../public/assets/Contact/logo2.png";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full my-10 flex items-center bg-gradient-to-t from-gray-100 via-gray-200 to-gray-100">
      <div id="contact" className="flex flex-col items-center w-full">
        <Image src={Logo2} width="auto" height="auto" alt="Logo Amakha Paris" />
        <div className="my-5 uppercase tracking-tight">
          <h5>Isaque Batista de Oliveira</h5>
        </div>

        <div>
          <p className="mb-2">
            <strong>Me siga nas Redes Sociais:</strong>
          </p>
        </div>

        {/*  */}
        <div className="flex items-center justify-between max-w-[330px] m-auto py-4 pt-1 gap-3">
          <a
            href="https://wa.me/5534992225485?text=Oi%20Isaque,%20eu%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Amakha%20Paris."
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer 
                hover:scale-105 ease-in duration-300"
            >
              <FaWhatsapp />
            </div>
          </a>

          <a
            href="https://www.instagram.com/amakha_paris_amakha/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer 
                hover:scale-105 ease-in duration-300"
            >
              <FaInstagram />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/isaque-batista-oliveira-50432024a/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer 
                hover:scale-105 ease-in duration-300"
            >
              <FaLinkedinIn />
            </div>
          </a>

          <a
            href="mailto:isaquebatista1716@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer 
                hover:scale-105 ease-in duration-300"
            >
              <AiOutlineMail />
            </div>
          </a>
        </div>

        <div className="text-center items-center">
          <p className="my-1 flex justify-center items-center gap-1"><FaWhatsapp />(34) 99222-5485</p>
          <p className="flex justify-center items-center gap-1"><AiOutlineMail />isaquebatista1716@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
