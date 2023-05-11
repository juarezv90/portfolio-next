import React from "react";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { projects } from "../components/functions/projects";

const Blog = () => {
  const items = projects.todo;

  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10" />
        <Image
          className="absolute object-cover object-left-top z-1"
          fill
          src={items.image}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{items.title}</h2>
          <h3>{items.primary_lang}</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>{items.objective()}</p>
          <Link href={items.demo} target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Live Site</button>
          </Link>
          <Link href={items.code} target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {items.languages.map((e) => {
                return (
                  <p className="text-gray-600 py-2 flex items-center">
                    <RiRadioButtonFill className="pr-1" />
                    {e}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Link href="/">
        <p className="cursor-pointer underline">Back</p>
      </Link>
    </div>
  );
};

export default Blog;
