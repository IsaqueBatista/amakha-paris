import React from "react";

const Depositions = () => {
  return (
    <div
      id="depositions"
      className="w-full p-2 flex items-center pb-10 bg-gradient-to-t from-zinc-800 via-gray-600 to-zinc-900"
    >
      <div className="max-w-[1240px] mx-auto pt-8 px-2">
        <h4 className="text-center py-1 text-white my-10  bg-gradient-to-t from-[#2A2E35] via-gray-600 to-zinc-800 border-solid border- border-y-0 border-x-indigo-500/5">
          Conquistas e <strong className="text-white">D</strong>epoimentos
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
