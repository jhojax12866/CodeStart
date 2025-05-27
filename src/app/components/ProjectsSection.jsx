"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Distritienda MJ",
    description: "Gestión de inventario y ventas",
    image: "/images/projects/distritiendamj.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/jhojax12866/Frontend-Distritienda-MJ.git",
    previewUrl:
      "https://demos.creative-tim.com/soft-ui-dashboard-pro-react/?_ga=2.55478946.860270220.1742786495-619823178.1742786495#/dashboards/default",
  },
  {
    id: 2,
    title: "Website Colegio Ciudad Mocoa",
    description: "gestion de encuestas para padres de familia",
    image: "/images/projects/ciudadmocoa.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/jhojax12866/Frontend_Formulario_Ciudad_Mocoa.git",
    previewUrl: "https://jhojax12866.github.io/Frontend_Formulario_Ciudad_Mocoa/",
  },
  {
    id: 4,
    title: "Application movil Teccel Mocoa",
    description: "Aplicacion movil en Appshet para gestion de inventario",
    image: "/images/projects/teccel.png",
    tag: ["Todos", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "React Tienda Rapicred",
    description: "gestion de prestamos y pagos",
    image: "/images/projects/mero.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/jhojax12866/tiendaapp.git",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Pagina web Teccel Mocoa",
    description: "Landing y atencion al usuario",
    image: "/images/projects/teccel2.png",
    tag: ["Todos", "Web"],
    gitUrl: "/",
    previewUrl: "https://teccelmocoa.com",
  },
  {
    id: 6,
    title: "Web Distriluna",
    description: "Menu de productos",
    image: "/images/projects/distriluna.png",
    tag: ["Todos", "Web"],
    gitUrl: "/",
    previewUrl: "https://menu-distriluna.vercel.app/",
  },
  {
    id: 7,
    title: "Vlsm Calculator",
    description: "Calculadora de Sub-redes",
    image: "/images/projects/vlsm.png",
    tag: ["Todos", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://v0-electron-vls-m-api.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");

  // Filtramos proyectos según tag
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  // Duplicamos el array filtrado para el carrusel
  const duplicatedProjects = [...filteredProjects, ...filteredProjects];

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <section id="projects" className="py-12">
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        Nuestros Proyectos
      </h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>

      <div className="carousel-container overflow-x-auto whitespace-nowrap px-4">
        <div className="carousel-track inline-flex gap-6">
          {duplicatedProjects.map((project, index) => (
            <div
              key={index}
              className="min-w-[400px] max-w-[400px] h-[280px] mx-2 inline-block"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
