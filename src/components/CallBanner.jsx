import Image from "next/image";
import Link from "next/link";
import React from "react";
import Banner from "../../public/assets/Banner/banner-chamada.jpg";

const CallBanner = () => {
  return (
    <section className="py-3 m-auto flex justify-center bg-gradient-to-t from-[#f3ac3b] to-[#f7cf8f]">
      <div className="m-auto flex justify-center pb-5">
        <Link
          target={"_blank"}
          href="https://escritorio.amakhaparis.com.br/join/102869"
        >
          <Image
            className="border-solid border-2 border-black hover:shadow-xl shadow-black"
            src={Banner}
            width="900"
            height="400"
            alt="Banner Seja Consultor Amakha Paris"
          />
        </Link>
      </div>
    </section>
  );
};

export default CallBanner;
