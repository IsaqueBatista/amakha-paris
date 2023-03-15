import Image from "next/image";
import React from "react";
import Logo2 from "../../public/assets/Contact/logo2.png";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="w-full flex items-center pb-10 bg-gradient-to-t from-gray-100 via-gray-200 to-gray-100">
        <div className="flex flex-col items-center w-full">
          <Image
            src={Logo2}
            width="auto"
            height="auto"
            alt="Logo Amakha Paris"
          />
          <div className="my-5 uppercase tracking-tight">
            <h5>Isaque Batista de Oliveira</h5>
          </div>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 pt-1 gap-3">
            {/*  */}

            <a
              href="https://api.whatsapp.com/send?phone=5534992225485&text=Ol%C3%A1%2C%20meu%20nome%20%C3%A9%20Isaque%2C%20seja%20bem-vindo!"
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
