import React from "react";
import { SiWhatsapp } from "react-icons/si";

const Depositions = () => {
  return (
    <div
      id="depositions"
      className="w-full p-2 flex items-center pb-10 bg-gradient-to-t from-zinc-800 via-gray-600 to-zinc-900"
    >
      <div className="max-w-[1240px] mx-auto pt-8 px-2">
        <div className="py-5 m-auto flex justify-center gap-2">
          <div className="gap-2 p-2 items-center justify-center md:flex md:gap-4">
            <a
              href="https://wa.me/5534992225485?text=Oi%20Isaque,%20eu%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20para%20revender%20Amakha%20Paris."
              target="_blank"
              rel="noreferrer"
            >
              <button className="tracking-wide mx-auto hover:bg-[#19e065] text-base text-white bg-[#0bb34b] shadow-md shadow-zinc-800 rounded-xl py-2 flex items-center gap-1 px-4">
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
              <button className="tracking-wide mx-auto text-white hover:bg-[#19e065] bg-[#0bb34b] shadow-md shadow-zinc-800 rounded-xl py-2 flex items-center gap-1 px-4">
                <SiWhatsapp className="text-xl" />
                Quero comprar com 50% de desconto!
              </button>
            </a>
          </div>
        </div>
        <h4 className="text-center font-serif uppercase py-1 px-1 text-white bg-[#d30000] rounded-sm my-10  ">
          Conquistas e Depoimentos
        </h4>
        <div className="grid md:grid-cols-4 md:gap-1">
          <div className="flex items-center flex-col justify-center h-[240px] w-full bg-gradient-to-t from-gray-100 via-gray-200 to-gray-400 shadow-lg shadow-gray-400 rounded-md group mt-5">
            <iframe
              className="p-0.5 rounded-md"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/oT5eHoMY-ls"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div className="flex items-center flex-col justify-center h-[240px] w-full bg-gradient-to-t from-gray-100 via-gray-200 to-gray-400 shadow-lg shadow-gray-400 rounded-md group mt-5">
            <iframe
              className="p-0.5 rounded-md"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/91JtyuQ0k24"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div className="flex items-center flex-col justify-center h-[240px] w-full bg-gradient-to-t from-gray-100 via-gray-200 to-gray-400 shadow-lg shadow-gray-400 rounded-md group mt-5">
            <iframe
              className="p-0.5 rounded-md"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/QnDhnSwEsfk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <div className="flex items-center flex-col justify-center h-[240px] w-full bg-gradient-to-t from-gray-100 via-gray-200 to-gray-400 shadow-lg shadow-gray-400 rounded-md group mt-5">
            <iframe
              className="p-0.5 rounded-md"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/k9YG2DN9pWY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depositions;
