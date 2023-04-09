import React from "react";
import { SiWhatsapp } from "react-icons/si";

const VideoAbout = () => {
  return (
    <section className="w-full text-center">
      <div className="w-full h-full p-2 px-10 custom-img2 items-center">
        <div>
          <div className="flex justify-center mt-5 mb-10 ">
            <iframe
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/WbXDcOhDRk4" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
              
            </iframe>
          </div>
        </div>
        <div className=" p-2 m-auto flex justify-center gap-2">
          <div className="gap-2 p-3 items-center justify-center md:flex md:gap-4 bg-zinc-50">
            <a
              href="https://wa.me/5534992225485?text=Oi%20Isaque,%20eu%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20para%20revender%20Amakha%20Paris."
              target="_blank"
              rel="noreferrer"
            >
              <button className="tracking-wide mx-auto text-white bg-[#FFAC00] hover:bg-[#bf6c07] shadow-md shadow-gray-800 rounded-2xl py-2 flex items-center gap-1 px-4">
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
            <button className="tracking-wide mx-auto text-white bg-[#FFAC00] hover:bg-[#bf6c07] shadow-md shadow-gray-800 rounded-2xl py-2 flex items-center gap-1 px-4">
              <SiWhatsapp className="text-xl" />
              Quero comprar com 50% de desconto!
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoAbout;
