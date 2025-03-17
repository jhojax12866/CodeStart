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
        <li>Desarrollo Web Full Stack – Aplicaciones web personalizadas con tecnologías modernas.</li>
        <li>Desarrollo Frontend – Interfaces intuitivas y responsivas con React y Redux.</li>
        <li>Desarrollo Backend – Arquitecturas robustas con Node.js, Express y bases de datos SQL.</li>
        <li>Integraciones y API – Conexión fluida entre sistemas con APIs seguras y eficientes.</li>
        <li>Optimización y Mantenimiento – Mejora de rendimiento y soporte continuo.</li>
        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Instituto Tegnologico del Putumayo</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>📌 Frontend: React, Redux, HTML, CSS</li>
        <li>📌 Backend: Node.js, Express</li>
        <li>📌 Bases de Datos: PostgreSQL, Sequelize</li>
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
        <Image src="/images/codecode.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Nosotros</h2>
          <p className="text-base lg:text-lg">
          Somos un equipo de desarrolladores full stack especializados en la creación de 
          aplicaciones web interactivas, escalables y de alto rendimiento. Nuestro equipo
          está compuesto por expertos en frontend y backend, con experiencia en tecnologías 
          como JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS
          y Git. Nos apasiona ofrecer soluciones tecnológicas innovadoras que optimicen la 
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
