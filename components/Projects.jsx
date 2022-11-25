import Image from "next/image";
import Link from "next/link";
import React from "react";
import { proImages } from "../public/assets/projects/projectImages";
import ProjectsItems from "./ProjectsItems";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <ProjectsItems title="MTG Builder" background={proImages.mox} projectUrl="/url" />
            <ProjectsItems title="Color Finder" background={proImages.colorFinder} projectUrl="/url" />
            <ProjectsItems title="ToDo List Maker" background={proImages.toDoLister} projectUrl="/url" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
