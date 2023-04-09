"use client";

import React from "react";
import Carousell from "react-elastic-carousel";
import Image from "next/image";

import Capilar from "../../../public/assets/Products/capilar.png";
import Nutraceuticos from "../../../public/assets/Products/nutraceuticos.png";
import Hidratantes from "../../../public/assets/Products/hidratantes.png";
import Infantil from "../../../public/assets/Products/infantil.png";

const Carousel = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <aside className="flex items-center justify-center mx-auto">
      <Carousell
        itemsToScroll={1}
        itemsToShow={1}
        breakPoints={breakPoints}
        style={{ width: "90%" }}
      >
        <itemsToScroll>
          <div className="m-2 p-5 w-[280px] rounded-2xl flex-none bg-gradient-to-t from-gray-200 via-gray-200 to-gray-300 shadow-lg shadow-gray-300">
            <div>
              <Image
                className="w-full h-full object-cover"
                src={Capilar}
                width="220"
                height="300"
                alt="Linha capilar"
              />
            </div>
            <div className="h-36 flex flex-col justify-around p-2">
              <span className="block text-center rounded-sm text-xl font-bold text-gray-900">
                Linha Capilar
              </span>
              <span className="block text-center rounded-sm text-base text-gray-900">
                Amplo portfólio para o uso diário e em salões de beleza
              </span>
            </div>
          </div>
        </itemsToScroll>

        <itemsToScroll>
          <div className="m-2 p-5 w-[280px] rounded-2xl flex-none bg-gradient-to-t from-gray-200 via-gray-200 to-gray-300 shadow-lg shadow-gray-300">
            <div>
              <Image
                className="w-full h-full object-cover"
                src={Nutraceuticos}
                width="220"
                height="300"
                alt="Linha capilar"
              />
            </div>
            <div className="h-36 flex flex-col justify-around p-2">
              <span className="block text-center rounded-sm text-xl font-bold text-gray-900">
                Nutracêuticos
              </span>
              <span className="block text-center rounded-sm text-base text-gray-900">
                Esteja em dia com a sua saúde, desempenho físico e mental{" "}
              </span>
            </div>
          </div>
        </itemsToScroll>

        <itemsToScroll>
          <div className="m-2 p-5 w-[280px] rounded-2xl flex-none bg-gradient-to-t from-gray-200 via-gray-200 to-gray-300 shadow-lg shadow-gray-300">
            <div>
              <Image
                className="w-full h-full object-cover"
                src={Hidratantes}
                width="220"
                height="300"
                alt="Linha capilar"
              />
            </div>
            <div className="h-36 flex flex-col justify-around p-2">
              <span className="block text-center rounded-sm text-xl font-bold text-gray-900">
                Hidratantes
              </span>
              <span className="block text-center rounded-sm text-base text-gray-900">
                Hidratação e suavidade para todos os tipos de pele{" "}
              </span>
            </div>
          </div>
        </itemsToScroll>

        <itemsToScroll>
          <div className="m-2 p-5 w-[280px] rounded-2xl flex-none bg-gradient-to-t from-gray-200 via-gray-200 to-gray-300 shadow-lg shadow-gray-300">
            <div>
              <Image
                className="w-full h-full object-cover"
                src={Infantil}
                width="220"
                height="300"
                alt="Linha capilar"
              />
            </div>
            <div className="h-36 flex flex-col justify-around p-2">
              <span className="block text-center rounded-sm text-xl font-bold text-gray-900">
                Magic Candy
              </span>
              <span className="block text-center rounded-sm text-base text-gray-900">
                Deixe a hora do banho cheirosinha com a linha mais divertida da
                Amakha Paris{" "}
              </span>
            </div>
          </div>
        </itemsToScroll>
      </Carousell>
    </aside>
  );
};

export default Carousel;
