'use client'
import About from "@/components/About";
import News from "@/components/News";
import Projects from "@/components/Projects";
import Snow from "@/components/Snow";
import SplashScreen from "@/components/SplashScreen";
import { useStatus } from "@/context/StatusProvider";
import { getStatus } from "@/lib/db";
import { useState, useEffect } from "react";
import { jersey25, jersey20, jersey10, inter } from "./fonts";
import Image from "next/image";
import Activity from "@/components/Activity";
import Contact from "@/components/Contact";
export default function Home() {
  const [activeTab, setActiveTab] = useState("about");
  const { status, setStatus } = useStatus();
  const [statusText, setStatusText] = useState("");
  const [loading, setLoading] = useState(true); // You likely want true at first
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1500); // start fade out
    const final = setTimeout(() => setLoading(false), 1600); // remove from DOM
    return () => {
      clearTimeout(timer);
      clearTimeout(final);
    };
  }, []);
  useEffect(() => {
    const getCurrentStatus = async () => {
      try {
        const status = await getStatus();
        if (status) {
          setStatus(status);
          setStatusText(status as string);
        } else {
          console.error("Failed to fetch status from the database.");
        }
      } catch (error) {}
    };
    getCurrentStatus();
  }, []);



  // ✅ This is the proper return statement
  return loading ? (
    <SplashScreen fadeOut={fadeOut} />
  ) : (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-5 bg-[url('/images/8351332.gif')] w-full bg-cover bg-no-repeat">
      <Snow />

      <div className="w-full border-2 border-white bg-gray-9002 backdrop-blur-md rounded-lg px-12 pt-0 z-9 py-5">
        <div
          className={`${jersey25.className} w-full text-white flex gap-5 items-center`}
        >
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-5 items-center">
              <div className="group relative">
                <span className="relative flex size-4">
                  <span
                    className={`${
                      statusText === "online"
                        ? "bg-green-500"
                        : statusText === "busy"
                        ? "bg-yellow-300"
                        : "bg-red-500"
                    } absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75 right-[4px] top-2`}
                  ></span>
                  <span
                    className={`${
                      statusText === "online"
                        ? "bg-green-500"
                        : statusText === "busy"
                        ? "bg-yellow-300"
                        : "bg-red-500"
                    } relative inline-flex size-4 rounded-full top-2 right-[4px]`}
                  ></span>
                </span>
                <div className="group-hover:opacity-100 opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300 bg-indigo-500 py-2 px-4 text-center rounded-full pointer-events-none">
                  <p
                    className={`${
                      statusText === "online"
                        ? "text-green-500"
                        : statusText === "busy"
                        ? "text-yellow-300"
                        : "text-red-500"
                    }
                    text-xl font-bold uppercase transition-all duration-300
                    `}
                  >
                    {statusText}
                  </p>
                </div>

                <Image
                  src="/images/profile.jpeg"
                  width={104}
                  height={104}
                  alt="Profile"
                  className={`rounded-lg border-2 box-border ${
                    statusText === "online"
                      ? "border-green-500"
                      : statusText === "busy"
                      ? "border-yellow-300"
                      : "border-red-500"
                  } hover:scale-105 transition-all duration-300`}
                />
              </div>
              <div>
                <span className="flex gap-2 items-center">
                  <p className="text-3xl">s1ddiq</p>
                  <Image
                    src="/images/16x16/Item__00.png"
                    width={25}
                    height={25}
                    alt="Sword"
                    className="rounded-lg"
                  />
                </span>
                <p className="text-gray-400 ">Game + Web Developer </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${jersey20.className} text-white my-5 text-2xl flex gap-5 bg-gray-800 w-fit px-5 rounded-t-md py-3 border-2 border-white`}
        >
          {["about", "projects", "activity", "news", "contact"].map((_tab) => (
            <p
              className={`${
                activeTab === _tab ? "text-yellow-300" : ""
              } h-12 w-1/5 cursor-pointer`}
              key={_tab}
              onClick={() => setActiveTab(_tab)}
            >
              {_tab}
            </p>
          ))}
        </div>
        <div className={`${jersey10.className} text-white`}>
          {activeTab === "about" && <About />}
          {activeTab === "proje`cts" && <Projects />}
          {activeTab === "activity" && <Activity />}
          {activeTab === "news" && <News />}
          {activeTab === "contact" && <Contact />}
          {/* add sent notification */}

          <p className={`${inter.className} text-xl`}></p>
        </div>
        <Image
          src="/images/car.png"
          width={100}
          height={100}
          alt="Profile"
          className="rounded-lg"
        />
        <span className="flex gap-2 items-center">
          <Image
            src="/images/16x16/Item__00.png"
            width={25}
            height={25}
            alt="Sword"
            className="rounded-lg"
          />
        </span>
        <audio
          src="/sounds/drowning.m4a"
          autoPlay
          controls
          loop
          className="opacity-0"
        >
          Your browser does not support the audio element.
        </audio>
      </div>
    </main>
  );
}
