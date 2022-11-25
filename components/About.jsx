import Image from "next/image";
import React from "react";
import propic from "../public/assets/profile.webp";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">// I am not your normal developer</p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
            dicta necessitatibus. Amet alias officia ipsum sed culpa tempora?
            Minima eligendi magnam voluptas praesentium eos blanditiis
            laboriosam est. Fugit, tempore ad.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            dolorem dolor, magni adipisci, quod recusandae, aliquam alias ipsam
            hic accusantium quibusdam similique? Magni, consectetur qui. Hic
            quidem non esse velit?
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects.</p>
        </div>
        <div className="max-w-[300px] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={propic} alt="/" width={300}/>
        </div>
      </div>
    </div>
  );
};

export default About;
