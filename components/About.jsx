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
          <p className="py-2 text-gray-600">
            // I am not your normal developer
          </p>
          <p className="py-2 text-gray-600">
            I've always had a fascination with computers from since growing up
            around developing technologies. My first interest in web design was
            when I found a book on website building in the 4th grade in my
            schools library. I remember how excited I was when I built my first
            static web page and showed it off to my parents.
          </p>
          <p className="py-2 text-gray-600">
           When it comes to design, I am attentative to every detail. My number one objective is to make
           sure that all my work will be user friendly and meet the needs of the client. Functionality is 
           a key factor into all my work and making sure that the production version always works without fail the moment it hits the server. 
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            <Link href="/#projects">Check out some of my latest projects.</Link>
          </p>
        </div>
        <div className="max-w-[300px] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src="/assets/profile.webp" alt="/" width={300} height={200} />
        </div>
      </div>
    </div>
  );
};

export default About;
