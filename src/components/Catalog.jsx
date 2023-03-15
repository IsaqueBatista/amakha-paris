import Image from "next/image";
import Link from "next/link";
import React from "react";
import CatalogImg from "../../public/assets/Catalog/catalogo.jpg";

const Catalog = () => {
  return (
    <div>
      <div className="mb-2">
        <p>Clique na imagem e faça o download do catálogo.</p>
      </div>

      <div className="flex justify-center px-1 mb-10">
        <Link href="/">
          <Image
            className="rounded-sm border-solid border-2 border-black"
            src={CatalogImg}
            width="100%"
            height="800"
            alt="Catálogo Amakha Paris"
          />
        </Link>
      </div>
    </div>
  );
};

export default Catalog;
