import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">// A developer ready to deliver</p>
          <p className="py-2 text-gray-600">
            I am a developer and programmer passionate about delivering high
            quality work. When it comes to design, I am attentive to every
            detail. My number one objective is to make sure that all my work
            is user friendly and meets the needs of the client.
            Functionality is a key factor and making sure that
            the production version always works without fail the moment it hits
            the server.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            <Link href="/#projects">Check out some of my latest projects.</Link>
          </p>
        </div>
        <div className="max-w-[300px] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/assets/profile.webp"
            alt="/"
            width={300}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
