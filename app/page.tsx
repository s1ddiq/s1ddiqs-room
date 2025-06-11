"use client";
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
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const getCurrentStatus = async () => {
      try {
        const status = await getStatus();
        if (status) {
          setStatus(status);
          setStatusText(status as string);
        }
      } catch (error) {
        console.error("Error fetching status:", error);
      }
      // } finally {
      //   setLoading(false);
      // }
    };
    getCurrentStatus();

    // Splash screen logic
    const fadeTimer = setTimeout(() => setFadeOut(true), 5000);
    const loadTimer = setTimeout(() => setLoading(false), 8000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <main className="flex min-h-screen flex-col items-center justify-between sm:px-12 px-2 py-12 w-full bg-black">
        <Snow />
        <div className="w-full border-2 border-white bg-gray-9002 backdrop-blur-md rounded-lg sm:p-8 p-2 z-9">
          {/* Header */}
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
                      } absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 right-[4px] top-2`}
                    />
                    <span
                      className={`${
                        statusText === "online"
                          ? "bg-green-500"
                          : statusText === "busy"
                          ? "bg-yellow-300"
                          : "bg-red-500"
                      } relative inline-flex size-4 rounded-full top-2 right-[4px]`}
                    />
                  </span>
                  <div className="group-hover:opacity-100 opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300 bg-black py-2 px-4 text-center rounded-full pointer-events-none">
                    <p
                      className={`${
                        statusText === "online"
                          ? "text-green-500"
                          : statusText === "busy"
                          ? "text-yellow-300"
                          : "text-red-500"
                      } text-xl font-bold uppercase`}
                    >
                      {statusText}
                    </p>
                  </div>
                  <Image
                    src="/images/profile.jpeg"
                    width={104}
                    height={104}
                    alt="Profile"
                    className={`rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                      statusText === "online"
                        ? "border-green-500"
                        : statusText === "busy"
                        ? "border-yellow-300"
                        : "border-red-500"
                    }`}
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
                  <p className="text-[var(--green-100)]">
                    Game + Web Developer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div
            className={`${jersey20.className} text-white my-5 text-2xl flex sm:flex-row flex-col gap-5 bg-black sm:w-fit w-full px-5 rounded-t-md py-3 border-2 border-white`}
          >
            {["about", "projects", "news", "contact"].map((_tab) => (
              <p
                key={_tab}
                onClick={() => setActiveTab(_tab)}
                className={`${
                  activeTab === _tab ? "text-[var(--green-100)]" : ""
                } sm:h-12 h-fit w-1/4 cursor-pointer`}
              >
                {_tab}
              </p>
            ))}
          </div>

          {/* Tab Content */}
          <div className={`${jersey10.className} text-white`}>
            {activeTab === "about" && <About />}
            {activeTab === "projects" && <Projects />}
            {activeTab === "activity" && <Activity />}
            {activeTab === "news" && <News />}
            {activeTab === "contact" && <Contact />}
          </div>

          {/* Extras */}
        </div>
      </main>
      {/* Splash Screen Overlay */}
      {loading && (
        <div
          className={`absolute top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <SplashScreen fadeOut={fadeOut} />
        </div>
      )}
    </div>
  );
}
