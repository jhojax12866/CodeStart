"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Aplicaciones web personalizadas con tecnologías modernas.</li>
        <li>Interfaces intuitivas y responsivas con React y Next.js. </li>
        <li>Arquitecturas robustas con Node.js y bases de datos</li>
        <li>Conexión fluida entre sistemas con APIs seguras y eficientes.</li>
        <li>Mejora de rendimiento y soporte continuo.</li>
        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Instituto Tegnologico del Putumayo</li>
        <li>Institucion Universitaria del Putumayo</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>📌 Frontend: React.js, Next.js, HTML, CSS, JavaScript, TypeScript, Astro</li>
        <li>📌 Backend: Python(Django), Java Scrip (Node.js), PHP, TypeScript (Node.js)</li>
        <li>📌 Bases de Datos: MySQL, SQL Server, MongoDB</li>
        <li>📌 Herramientas: Git, GitHub, Docker</li>
       </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/codecode.png" alt="img" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Nosotros</h2>
          <p className="text-base lg:text-lg">
          Somos un equipo de desarrolladores full stack especializados en la creación de 
          aplicaciones web interactivas, escalables y de alto rendimiento. Nuestro equipo
          está compuesto por expertos en frontend y backend, con experiencia en tecnologías 
          como JavaScript, React, Node.js, HTML, CSS
          y demas. Nos apasiona ofrecer soluciones tecnológicas innovadoras que optimicen la 
          experiencia del usuario y mejoren la eficiencia de los negocios.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Nuestros Servicios{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educacion{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Experiencia{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
