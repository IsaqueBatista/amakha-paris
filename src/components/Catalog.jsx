import Image from "next/image";
import React from "react";
import CatalogImg from "../../public/assets/Catalog/catalogo.jpg";

const Catalog = () => {
  return (
    <section id="catalogo">
      <div className="flex justify-center px-1 pt-10 bg-gradient-to-t from-gray-500 via-orange-500 to-slate-100">
        <Image
          className="rounded-sm border-solid border-2 border-black"
          src={CatalogImg}
          width="100%"
          height="800"
          alt="Catálogo Amakha Paris"
        />
      </div>

      <div className="p-2 text-white bg-gradient-to-t from-[#384252] via-zinc-700 to-gray-500 flex justify-center">
        {/* <a href="https://download1519.mediafire.com/hi7983xrkxwgUE-ecc9mIr5lRoO0XDAuxEMUGvwUwuJW-iuIhW_pa0QK1knXgFL_mkrlz7TyTvPJ_d5Dw116heuPeUNn61Q/hb4rmg833rkzbdi/Catalogo_AMAKHA.pdf"> */}
          <a
          href="/assets/Catalogo_AMAKHA.pdf"
          download="Catalogo_AMAKHA.pdf"
          type="application/pdf"
          target="_blank"
          rel="noopener noreferrer"
          alt="Catálogo Amakha Paris em PDF"
        >

          <button
            className="font-sans mb-5 py-2 p-1 px-3 text-sm uppercase rounded-md tracking-wide
                bg-[red] hover:bg-[#cf1616] hover:text-[white]  shadow-xl shadow-black/40"
          >
            Clique aqui e faça o download do catálogo
          </button>
        </a>
      </div>
    </section>
  );
};

export default Catalog;
