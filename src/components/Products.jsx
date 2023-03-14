import Image from "next/image";
import React from "react";
import Perfume from "../../public/assets/Produtos/perfumes.png";
import Capilar from "../../public/assets/Produtos/capilar.png";
import Nutraceuticos from "../../public/assets/Produtos/nutraceuticos.png";
import Hidratantes from "../../public/assets/Produtos/hidratantes.png";
import Infantil from "../../public/assets/Produtos/infantil.png";

const Products = () => {
  return (
    <>
      <div className="m-auto p-10 pb-5 flex justify-center bg-gradient-to-t from-gray-400 to-gray-300">
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

      <div className="w-full pb-20 bg-gradient-to-t from-gray-100 via-gray-200 to-gray-400">
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
    </>
  );
};

export default Products;
