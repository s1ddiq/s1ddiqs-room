"use client";
import { inter } from "@/app/fonts";
import Link from "next/link";
import React from "react";
import {
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoTailwindCss,
  BiLogoVisualStudio,
  BiLogoTypescript,
  BiLogoCss3,
} from "react-icons/bi";
import { FaReact, FaNode } from "react-icons/fa";
import {
  SiNextdotjs,
  SiAppwrite,
  SiSupabase,
  SiRedux,
  SiExpress,
  SiSocketdotio,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { Button } from "./retroui/Button";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <>
      <h1 className="text-4xl">Hello!</h1>
      <p className={`${inter.className} text-xl`}>
        I'm s1ddiq or CD. I'm a programmer with about 4 years of experience.
      </p>
      <p className={`${inter.className} text-xl`}>
        I began experimenting with sublime editor back in 2021 learning from
        javascript.com, starting{" "}
        <BiLogoJavascript color="yellow" size={24} className="inline" />{" "}
        <span className="text-yellow-300 inline">JavaScript</span>. Pretty
        quickly, I realized it doesn’t go far without{" "}
        <BiLogoHtml5 color="orange" size={24} className="inline" />{" "}
        <span className="text-orange-400 inline">HTML</span> and{" "}
        <BiLogoHtml5 color="dodgerblue" size={24} className="inline" />{" "}
        <span className="text-blue-500 inline">CSS</span>, so I went back to
        square one and learnt the fundamentals. too. I started building basic
        websites and small browser games—just experimenting, figuring things out
        as I went. Once I had the fundamentals locked in, I began exploring
        frameworks and libraries. pretty quickly I picked up
        <SiNextdotjs size={24} className="inline" color="white" />{" "}
        <BiLogoTailwindCss color="dodgerblue" size={24} className="inline" />{" "}
        <span className="text-blue-500 inline">Tailwind CSS</span> for fast,
        clean UIs. You’ll find some of those projects under the Projects tab.
        Outside of that, I’ve explored a bit of everything: C++, Python,
        Node.js, Express,{" "}
        <SiAppwrite size={24} className="inline" color="crimson" /> Appwrite,{" "}
        <SiSupabase color="lime" size={24} className="inline" /> Supabase...you
        name it!
      </p>
      <div className="flex gap-2">
        <p className="text-2xl">Preferred code editor is</p>
        <BiLogoVisualStudio color="dodgerblue" size={28} />
      </div>
      <p className="text-2xl text-[var(--green-100)]">
        Learning C++ & Phaser.js
      </p>
      <div className="flex sm:flex-row flex-col gap-5 justify-between">
        <div>
          <p className="text-2xl mt-6">My Languages:</p>
          <ul className="list-none list-inside text-2xl">
            <li>
              <BiLogoJavascript className="inline" color="yellow" />{" "}
              <span className="text-yellow-300">JavaScript</span>
            </li>
            <li>
              <BiLogoTypescript className="inline" color="#3178C6" />{" "}
              <span className="text-[#3178C6]">TypeScript</span>
            </li>
            <li>
              <BiLogoHtml5 className="inline" color="orange" />{" "}
              <span className="text-orange-400">HTML5</span>
            </li>
            <li>
              <BiLogoCss3 className="inline" color="dodgerblue" />{" "}
              <span className="text-blue-500">CSS3</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-2xl mt-6">Frameworks & Libraries:</p>
          <ul className="list-none list-inside text-2xl">
            <li>
              <SiNextdotjs className="inline" color="white" />{" "}
              <span className="text-white">Next.js</span>
            </li>
            <li>
              <FaReact className="inline" color="#61DBFB" />{" "}
              <span className="text-[#61DBFB]">React</span>
            </li>
            <li>
              <SiRedux className="inline" color="#764ABC" />{" "}
              <span className="text-[#764ABC]">Redux</span>
            </li>
            <li>
              <FaNode className="inline" color="#43853D" />{" "}
              <span className="text-[#43853D]">Node.js</span>
            </li>
            <li>
              <SiExpress className="inline" color="gray" />{" "}
              <span className="text-gray-300">Express.js</span>
            </li>
            <li>
              <SiSocketdotio className="inline" color="black" />{" "}
              <span className="text-white">Socket.io</span>
            </li>
            <li>
              <BiLogoTailwindCss className="inline" color="dodgerblue" />{" "}
              <span className="text-blue-500">Tailwind CSS</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-2xl mt-6">Platforms & Tools:</p>
          <ul className="list-none list-inside text-2xl">
            <li>
              <SiVercel className="inline" color="white" />{" "}
              <span className="text-white">Vercel</span> — where this website is
              hosted!
            </li>
            <li>
              <SiNetlify className="inline" color="#00C7B7" />{" "}
              <span className="text-[#00C7B7]">Netlify</span>
            </li>
            <li>
              <SiAppwrite className="inline" color="crimson" />{" "}
              <span className="text-crimson-500">Appwrite</span>
            </li>
            <li>
              <SiSupabase className="inline" color="lime" />{" "}
              <span className="text-lime-400">Supabase</span> — backend for this
              website
            </li>
          </ul>
        </div>

        <div>
          <p className="text-2xl mt-6">Mobile Dev:</p>
          <ul className="list-none list-inside text-2xl">
            <li>
              <FaReact className="inline" color="#61DBFB" />{" "}
              <span className="text-[#61DBFB]">React Native</span>
            </li>
          </ul>
          {/* <p className="text-gray-400 text-2xl">
            <span className="text-red-500">! *</span>
            All AI-Generated slogans 😭
          </p> */}
          <p className="text-2xl">My Socials + Profiles: </p>
          <ul className="list-none list-inside text-2xl text-[var(--green-100)] underline">
            <li>
              <Link href="https://github.com/s1ddiq">Github</Link>
            </li>
            <li>
              <Link href="https://namemc.com/profile/s1ddiq">NameMC</Link>
            </li>
            <li>
              <Link href="https://leetcode.com/u/s2ddiq/">LeetCode</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <Button
        onClick={() => router.push("/admin")}
        className="my-5 bg-[var(--green-100)]"
      >
        Admin Settings
        <span className="text-red-500">* </span>
      </Button> */}
      <p className={`${inter.className} text-xl`}></p>
    </>
  );
};

export default About;
