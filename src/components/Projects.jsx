import React from "react";
// import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";

function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                    Apps I've Built
                    </h1>

                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam fuga dolore.
                    </p>
                </div>
        
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <a
                        href={project.link}
                        key={project.image}
                        className="sm:w-1/2 w-100 p-4">
              
                <div className="flex relative">
                    <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={project.image}
                    />
                
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                            {project.subtitle}
                        </h2>
                  
                        <h1 className="title-font text-lg font-medium text-white mb-3">
                            {project.title}
                        </h1>
                        <p className="leading-relaxed">{project.description}</p>
                    </div>
                </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;