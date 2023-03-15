import Image from "next/image";
import React from "react";
import Pa from "../../public/assets/About/logo-pa.png";

const About = () => {
  return (
    <div className="w-full text-center">
      <div className="w-full h-full p-2 px-10 bg-gradient-to-t from-gray-700 via-gray-500 to-zinc-300">
        <div className="bg-gradient-to-t from-zinc-900 via-gray-600 to-zinc-900 rounded-md">
          <div className="m-auto">
            <h1 className="text-white py-8 mt-20">Quem somos</h1>
            <p className="p-5 text-white text-center text-lg m-auto px-20">
              A Amakha Paris é uma das maiores marcas de beleza e bem-estar do
              Brasil. A mesma acredita no empreendedorismo social e é a
              oportunidade de negócios para mais de 1 milhão de consultores. São
              mais de 500 itens de alta qualidade em seu portfólio.
            </p>
          </div>
          <div className="flex justify-center mt-5">
            <iframe
              className="border-solid border-2 border-black"
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/YzQ_eZx_KM4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="flex md:flex-row-reverse flex-col pr-5">
            <div className="flex md:flex items-center gap-10 justify-center">
              <Image src={Pa} width="200" height="180" alt="/" />
            </div>

            <p className="p-5 text-white text-center text-lg m-auto px-20 pr-10">
              Em todo o Brasil, você encontra Pontos de Apoio para adquirir os
              produtos. E você também pode ser o empreendedor de um deles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
