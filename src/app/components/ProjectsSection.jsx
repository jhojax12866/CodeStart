"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Distritienda MJ",
    description: "Gestión de inventario y ventas",
    image: "/images/projects/distritiendamj.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/jhojax12866/Frontend-Distritienda-MJ.git",
    previewUrl: "https://demos.creative-tim.com/soft-ui-dashboard-pro-react/?_ga=2.55478946.860270220.1742786495-619823178.1742786495#/dashboards/default",
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
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["Todos", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["Todos", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
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
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
