import Image from "next/image";
import React from "react";

const VideoAbout = () => {
  return (
    <div className="w-full text-center">
      <div className="w-full h-full p-2 px-10 bg-gradient-to-t from-gray-700 via-purple-700 to-slate-200">
        <div>

          <div className="flex justify-center mt-5 mb-10">
            <iframe
              className="border-solid border-2 border-black"
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/YzQ_eZx_KM4"
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

export default VideoAbout;
