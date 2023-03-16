import Image from "next/image";
import React from "react";
import CatalogImg from "../../public/assets/Catalog/catalogo.jpg";

const Catalog = () => {
  return (
    <div id="catalogo">

      <div className="flex justify-center px-1 pt-10 bg-gradient-to-t from-zinc-900 via-gray-600 to-zinc-900">
        <Image
          className="rounded-sm border-solid border-2 border-black"
          src={CatalogImg}
          width="100%"
          height="800"
          alt="Catálogo Amakha Paris"
        />
      </div>

      <div className="p-2 text-white bg-gradient-to-t from-zinc-900 via-gray-600 to-zinc-900">
        <p className="underline mb-5">
          <a
            href="../../public/assets/Catalogo_AMAKHA.pdf"
            type="application/pdf"
            download="Catalogo_AMAKHA.pdf"
          >
            Clique aqui e faça o download do catálogo.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Catalog;
