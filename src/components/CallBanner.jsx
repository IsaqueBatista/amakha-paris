import Image from "next/image";
import Link from "next/link";
import React from "react";
import Banner from "../../public/assets/Banner/banner-chamada.jpg";

const CallBanner = () => {
  return (
    <div className="py-6 m-auto flex justify-center bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700">
      <div className="m-auto flex justify-center p-5">
        <Link
          target={"_blank"}
          href="https://escritorio.amakhaparis.com.br/join/102869"
        >
          <Image
            className="border-solid border-2 border-black"
            src={Banner}
            width="900"
            height="400"
            alt="Banner Seja Consultor Amakha Paris"
          />
        </Link>
      </div>
    </div>
  );
};

export default CallBanner;
