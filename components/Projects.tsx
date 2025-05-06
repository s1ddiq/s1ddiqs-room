'use client'

import { inter } from "@/app/fonts";
import React from "react";
import {
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { SiNextdotjs, SiAppwrite, SiSupabase } from "react-icons/si";
import ProjectsListing from "./ProjectsListing";

const Projects = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-4xl">My Projects</h1>
      <p className={`${inter.className} text-xl`}>
       Here are some of my weird projects!
      </p>

        <ProjectsListing />
    </div>
  );
};

export default Projects;
