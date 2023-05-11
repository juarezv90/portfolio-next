import React from "react";
import ProjectsItems from "./ProjectsItems";
import { projects } from "./functions/projects";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectsItems
            type={projects.mox.primary_lang}
            title={projects.mox.title}
            background={projects.mox.image}
            projectUrl="/Mtgapp"
          />
          <ProjectsItems
            type={projects.netflix.primary_lang}
            title={projects.netflix.title}
            background={projects.netflix.image}
            projectUrl="/NetflixClone"
          />
          <ProjectsItems
            type={projects.blog.primary_lang}
            title={projects.blog.title}
            background={projects.blog.image}
            projectUrl="/Blog"
          />
          <ProjectsItems
            type={projects.todo.primary_lang}
            title={projects.todo.title}
            background={projects.todo.image}
            projectUrl="/Todo"
          />
          <ProjectsItems
            type={projects.easybank.primary_lang}
            title={projects.easybank.title}
            background={projects.easybank.image}
            projectUrl="/Easybank"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
