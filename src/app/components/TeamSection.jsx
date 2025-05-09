"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "Jhojan Fernando",
    role: "Desarrollador Frontend",
    languages: "React, Next.js, Tailwind",
    image: "/images/team/jhojan.png",
    github: "https://github.com/jhojax12866",
  },
  {
    id: 2,
    name: "Jhonier Pasos",
    role: "Desarrollador Backend",
    languages: "Nest.js, Django, MySql",
    image: "/images/team/jhonier.jpg",
    github: "https://github.com/jhonierp",
  },
  {
    id: 3,
    name: "Camilo Vallejos",
    role: "Diseñador y Desarrollador",
    languages: "React, Figma, Python",
    image: "/images/team/camilo.png",
    github: "https://github.com/Camilo138",
  },
  {
    id: 4,
    name: "Daniel Mora",
    role: "Full Stack Developer",
    languages: "Python, Django, React",
    image: "/images/team/dan.png",
    github: "https://github.com/meroh1",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="mt-12 px-4">
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        Nuestro Equipo
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            className="bg-[#181818] rounded-xl shadow-lg p-6 text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-60 h-60 mx-auto rounded-full object-cover"
            />

            <h3 className="text-xl font-semibold text-white">{member.name}</h3>
            <p className="text-[#ADB7BE]">{member.role}</p>
            <p className="text-sm text-[#ADB7BE]">{member.languages}</p>
            <Link href={member.github} target="_blank">
              <p className="mt-4 text-primary-500 hover:underline">GitHub</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
