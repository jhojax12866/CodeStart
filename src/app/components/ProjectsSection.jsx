"use client";

import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "React Distritienda MJ",
    description: "Gestión de inventario y ventas",
    image: "/images/projects/distritiendamj.png",
    gitUrl: "https://github.com/jhojax12866/Frontend-Distritienda-MJ.git",
    previewUrl: "https://demos.creative-tim.com/soft-ui-dashboard-pro-react/",
  },
  {
    id: 2,
    title: "Website Colegio Ciudad Mocoa",
    description: "Gestión de encuestas para padres de familia",
    image: "/images/projects/ciudadmocoa.png",
    gitUrl: "https://github.com/jhojax12866/Frontend_Formulario_Ciudad_Mocoa.git",
    previewUrl: "https://jhojax12866.github.io/Frontend_Formulario_Ciudad_Mocoa/",
  },
  {
    id: 3,
    title: "Application móvil Teccel Mocoa",
    description: "App móvil en AppSheet para inventario",
    image: "/images/projects/teccel.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "React Tienda Rapicred",
    description: "Gestión de préstamos y pagos",
    image: "/images/projects/mero.png",
    gitUrl: "https://github.com/jhojax12866/tiendaapp.git",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Página web Teccel Mocoa",
    description: "Landing y atención al usuario",
    image: "/images/projects/teccel2.png",
    gitUrl: "/",
    previewUrl: "https://teccelmocoa.com",
  },
  {
    id: 6,
    title: "Web Distriluna",
    description: "Menú de productos",
    image: "/images/projects/distriluna.png",
    gitUrl: "/",
    previewUrl: "https://menu-distriluna.vercel.app/",
  },
  {
    id: 7,
    title: "VLSM Calculator",
    description: "Calculadora de subredes",
    image: "/images/projects/vlsm.png",
    gitUrl: "/",
    previewUrl: "https://v0-electron-vls-m-api.vercel.app/",
  },
];

const ProjectsSection = () => {
  const duplicatedProjects = [...projectsData, ...projectsData]; 

  return (
    <section id="projects" className="py-12">
      <h2 className="text-center text-4xl font-bold text-white mb-8">
  Nuestros Proyectos
</h2>


      <div className="carousel-container">
        <div className="carousel-track gap-6 px-4">
          {duplicatedProjects.map((project, index) => (
            <div
              key={index}
              className="min-w-[400px] max-w-[400px] h-[280px] mx-2"
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
