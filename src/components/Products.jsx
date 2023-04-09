import Image from "next/image";
import React from "react";
import Perfume from "../../public/assets/Products/perfumes.png";
import Carousel from "./Carousel/Carousel";

import { SiWhatsapp } from "react-icons/si";

const Products = () => {
  return (
    <article>
      <section
        id="products"
        className=" pt-10 p-5 bg-gradient-to-t from-gray-400 to-gray-300"
      >
        <div className="text-center">
          <div className="pt-10 mb-2 bg-gradient-to-t from-[#23252B] via-gray-600 to-zinc-900 p-2 gap-2  rounded-md">
            <div>
              <h4 className="font-serif uppercase w-full pt-5 mb-2  text-orange-500">
                Perfumaria Premium
              </h4>
            </div>
            <div className="mt-2 md:mb-5">
              {/* <div className="m-5 items-center flex justify-center">
                <Image
                  className="rounded-md"
                  src={Premium}
                  width="100%"
                  height="100%"
                  // width="450"
                  // height="400"
                  alt="Perfume logo"
                />
              </div> */}
              <div className="flex justify-center mx-5 mt-5">
                {/* <div className="flex justify-center"> */}
                <iframe
                  className="flex rounded-md"
                  width="640"
                  height="400"
                  src="https://www.youtube.com/embed/HlVeW05P2Ws"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-auto p-10 pb-5 pt-2 flex justify-center bg-gradient-to-t from-gray-400 to-gray-300">
        <div className="p-2 items-center md:flex gap-2 bg-gradient-to-t from-gray-400 via-gray-400 to-gray-200  rounded-md">
          <div className="xl:ml-10">
            <Image src={Perfume} width="950" height="650" alt="Perfume logo" />
          </div>
          <div className="mx-5 p-1 bg-gradient-to-t from-gray-600 via-gray-500 to-slate-300 rounded-md">
            <h3 className="pt-10 px-5 md:pr-15 font-serif md:text-start text-center">
              Perfumaria
            </h3>
            <p className="md:pr-10 px-5 pt-10 tracking-wide md:text-start text-justify text-white font-serif">
              Amakha significa “perfume” no idioma africano Zulu.
            </p>
            <p className="py-4 md:pr-20 px-5 md:text-start text-justify text-white font-serif tracking-wide">
              Trazemos em nosso nome a paixão pelo universo da perfumaria. Somos
              sucesso pela diversidade de criações perfumísticas e a altíssima
              concentração de óleos essenciais. São mais de 100 perfumes com até
              24 horas de fixação.
            </p>
            <p className="md:pr-20 px-5 pb-5 md:text-start text-justify text-white font-serif tracking-wide">
              Nosso portfólio foi desenvolvido em parceria com as principais
              Casas de Fragrâncias Internacionais, o que garante qualidade e
              adequação às tendências do mercado mundial de perfumes.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-5 flex items-center justify-center gap-2 bg-gray-400">
        <div className="gap-2 mx-auto p-2 items-center justify-center md:flex md:gap-4">
        <a
              href="https://wa.me/5534992225485?text=Oi%20Isaque,%20eu%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20para%20revender%20Amakha%20Paris."
              target="_blank"
              rel="noreferrer"
            >
              <button className="tracking-wide mx-auto text-white hover:bg-[#19e065] bg-[#0bb34b] shadow-md shadow-gray-800 rounded-2xl py-2 flex items-center gap-1 px-4">
                <SiWhatsapp className="text-xl" />
                Quero revender!
              </button>
            </a>
            <br />
            <a
            href="https://wa.me/5534992225485?text=Oi%20Isaque,%20eu%20gostaria%20de%20comprar%20todos%20os%20produtos%20da%20Amakha%20Paris%20com%2050%%20de%20desconto."
            target="_blank"
            rel="noreferrer"
          >
            <button className="mx-auto tracking-wide text-white hover:bg-[#19e065] bg-[#0bb34b] shadow-md shadow-gray-800 rounded-2xl py-2 flex items-center gap-1 px-4">
              <SiWhatsapp className="text-xl" />
              Quero comprar com 50% de desconto!
            </button>
            </a>
        </div>
      </section>

      <div className="flex items-center justify-center custom-img p-10">
      </div>
      
      <section className="w-full pb-10 bg-gradient-to-t from-gray-100 via-gray-200 to-gray-400 pt-7">
        <div className="max-w-[1240px] mx-auto px-2">
          <h4 className="text-center text-black font-serif uppercase bg-orange-400 rounded-md mb-10">
            Veja <strong className="text-black">também</strong>
          </h4>

          <Carousel />

          {/* <div className="grid md:grid-cols-4 md:gap-1">
            <div className="flex items-center flex-col justify-center h-auto w-full bg-gradient-to-t from-gray-100 via-gray-200 to-gray-400 shadow-lg shadow-gray-400 rounded-md group mt-20">
              <Image
                src={Capilar}
                width="220"
                height="300"
                alt="Linha capilar"
              />
              <h6 className="uppercase tracking-tight">Linha Capilar</h6>
              <p className="text-center mx-10 pt-6 pb-5">
                Amplo portfólio para o uso diário e em salões de beleza
              </p>
            </div>

            <div className="flex items-center flex-col justify-center h-auto w-full bg-gradient-to-t from-gray-100 via-gray-200 to-gray-400 shadow-lg shadow-gray-400 rounded-md group mt-20">
              <Image
                src={Nutraceuticos}
                width="220"
                height="300"
                alt="Linha nutricional"
              />
              <h6 className="uppercase tracking-tight">Nutracêuticos</h6>
              <p className="text-center mx-10 pt-6 pb-5">
                Esteja em dia com a sua saúde, desempenho físico e mental
              </p>
            </div>

            <div className="flex items-center flex-col justify-center h-auto w-full bg-gradient-to-t from-gray-100 via-gray-200 to-gray-400 shadow-lg shadow-gray-400 rounded-md group mt-20">
              <Image
                src={Hidratantes}
                width="220"
                height="300"
                alt="Hidratantes"
              />
              <h6 className="uppercase tracking-tight">Hidratantes</h6>
              <p className="text-center mx-10 pt-6 pb-5">
                Hidratação e suavidade para todos os tipos de pele
              </p>
            </div>

            <div className="flex items-center flex-col justify-center h-auto w-full bg-gradient-to-t from-gray-100 via-gray-200 to-gray-400 shadow-lg shadow-gray-400 rounded-md group mt-20">
              <Image
                src={Infantil}
                width="220"
                height="300"
                alt="Linha infantil"
              />
              <h6 className="uppercase tracking-tight">Magic Candy</h6>
              <p className="text-center mx-10 pt-6 pb-5">
                Deixe a hora do banho cheirosinha com a linha mais divertida da
                Amakha Paris
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </article>
  );
};

export default Products;
