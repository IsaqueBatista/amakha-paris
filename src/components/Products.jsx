import Image from "next/image";
import React from "react";
import Perfume from "../../public/assets/Products/perfumes.png";
import Premium from "../../public/assets/Products/premium.jpg";

import Capilar from "../../public/assets/Products/capilar.png";
import Nutraceuticos from "../../public/assets/Products/nutraceuticos.png";
import Hidratantes from "../../public/assets/Products/hidratantes.png";
import Infantil from "../../public/assets/Products/infantil.png";

const Products = () => {
  return (
    <div>
      <div id="products" className="pt-5 p-5 bg-gradient-to-t from-gray-400 to-gray-300">
        <div className="text-center">
          <div className="pt-10 mb-2 bg-gradient-to-t from-[#23252B] via-gray-600 to-zinc-900 p-2 gap-2  rounded-md">
            <div>
              <h4 className="w-full pt-5 mb-2 bg-gradient-to-t from-[#1E1F24] via-gray-700 to-zinc-900 text-[#FC8A01]">
                Perfumaria Premium
              </h4>
            </div>
            <div className="mt-2 md:mb-5">
              <div className="m-5 items-center flex justify-center">
                <Image
                  className="rounded-md"
                  src={Premium}
                   width="100%"
                   height="100%"

                  // width="450"
                  // height="400"
                  alt="Perfume logo"
                />
              </div>
              <div className="flex justify-center mx-5">
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
      </div>

      <div className="m-auto p-10 pb-5 pt-2 flex justify-center bg-gradient-to-t from-gray-400 to-gray-300">
        <div className="p-2 items-center md:flex gap-2 bg-gradient-to-t from-gray-400 via-gray-400 to-gray-200  rounded-md">
          <div className="xl:ml-10">
            <Image src={Perfume} width="950" height="650" alt="Perfume logo" />
          </div>
          <div className="mx-5 p-1 bg-gradient-to-t from-gray-600 via-gray-500 to-slate-300 rounded-md">
            <h3 className="pt-10 pl-5 pr-20">Perfumaria</h3>
            <p className="pr-10 pl-5 pt-10 flex text-start md:text-center text-white">
              Amakha significa “perfume” no idioma africano Zulu.
            </p>
            <p className="py-4 pr-20 pl-5 text-white">
              Trazemos em nosso nome a paixão pelo universo da perfumaria. Somos
              sucesso pela diversidade de criações perfumísticas e a altíssima
              concentração de óleos essenciais. São mais de 100 perfumes com até
              24 horas de fixação.
            </p>
            <p className="pr-20 pl-5 pb-5 text-white">
              Nosso portfólio foi desenvolvido em parceria com as principais
              Casas de Fragrâncias Internacionais, o que garante qualidade e
              adequação às tendências do mercado mundial de perfumes.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full pb-10 bg-gradient-to-t from-gray-100 via-gray-200 to-gray-400">
        <div className="max-w-[1240px] mx-auto px-2">
          <h3 className="text-center">
            Veja <strong className="text-slate-900">também</strong>
          </h3>
          <div className="grid md:grid-cols-4 md:gap-1">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
