import Image from "next/image";
import React from "react";
import CatalogImg from "../../public/assets/Catalog/catalogo.jpg";

const Catalog = () => {
  return (
    <div id="catalogo">
      <div className="p-2 text-white bg-gradient-to-t from-zinc-900 via-gray-600 to-zinc-900">
        <p>Clique na imagem e faça o download do catálogo.</p>
      </div>

      <div className="flex justify-center px-1 pb-10 bg-gradient-to-t from-zinc-900 via-gray-600 to-zinc-900">
        <a href="../../public/assets/Catalogo_AMAKHA.pdf" type="application/pdf" download >
          <Image
            className="rounded-sm border-solid border-2 border-black cursor-pointer"
            src={CatalogImg}
            width="100%"
            height="800"
            alt="Catálogo Amakha Paris"
          />
        </a>
      </div>
    </div>
  );
};

export default Catalog;
