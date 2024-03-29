import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectsItems = ({title, background,projectUrl, type}) => {
  return (
    <div className="relative flex items-center justify-center h-[30vh] lg:h-[35vh] w-full shadow-xl shadow-gray-400 rounded p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] duration-300">
    <Image
      layout="fill"
      objectFit='cover'
      className="rounded-xl group-hover:opacity-10"
      src={background}
      alt="/"
    />
    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <h3 className="text-2xl text-white tracking-wider text-center duration-300">
        {title}
      </h3>
      <p className="pb-4 pt-2 text-white text-center">
        {type} project
      </p>
      <Link href={projectUrl}>
        <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
          More Info
        </p>
      </Link>
    </div>
  </div>
  )
}

export default ProjectsItems
