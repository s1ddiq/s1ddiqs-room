import { inter } from "@/app/fonts";
import Link from "next/link";
import React from "react";

const ProjectsListing = () => {
  return (
    <div
      className={`${inter.className} grid gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 lg:grid-cols-3 items-start`}
    >
      <div className="p-5 h-full max-w-sm bg-black text-white rounded-lg shadow-lg border-2 border-white">
        <h2 className="text-2xl font-semibold text-[var(--green-100)] mb-2">
          QuranNet
        </h2>
        <p className="text-sm mb-4">
          QuranNet is the next big portal to connect with the Quran digitally.
          It allows users to read, discover, and truly understand its meaning,
          with built-in translations.
        </p>
        <p className="text-xs text-gray-400 mb-4">Updated 3 days ago</p>
        <p className="text-xs text-gray-400">
          Tech Stack: TypeScript, Tailwind CSS, and Next.js using the
          AlQuran.cloud API
        </p>
        <div className="mt-4">
          <Link
            className="bg-[var(--green-100)] py-2 px-6 text-black rounded-md hover:bg-[var(--green-200)] transition-colors duration-300"
            href="https://quran-net-five.vercel.app/"
          >
            View Project
          </Link>
        </div>
      </div>

      <div className="p-5 h-full max-w-sm bg-black text-white rounded-lg shadow-lg border-2 border-white">
        <h2 className="text-2xl font-semibold text-[var(--green-100)] mb-2">
          UpToQuote
        </h2>
        <p className="text-sm mb-4">
          UpToQuote delivers daily doses of inspiration and motivation with
          beautifully curated quotes.
        </p>
        <p className="text-xs text-gray-400 mb-4">Updated last week</p>
        <p className="text-xs text-gray-400">
          Tech Stack: TypeScript, Tailwind CSS, and Next.js
        </p>
        <div className="mt-4">
          <Link
            href="https://up-to-quote.vercel.app/"
            className="bg-[var(--green-100)] py-2 px-6 text-black rounded-md hover:bg-[var(--green-200)] transition-colors duration-300"
          >
            View Project
          </Link>
        </div>
      </div>

      <div className="p-5 h-full max-w-sm bg-black text-white rounded-lg shadow-lg border-2 border-white">
        <h2 className="text-2xl font-semibold text-[var(--green-100)] mb-2">
          bicycles-demo
        </h2>
        <p className="text-sm mb-4">
          Bicycles is a demo website to showcase basic web development concepts.
        </p>
        <p className="text-xs text-gray-400 mb-4">Updated 3 weeks ago</p>
        <p className="text-xs text-gray-400">
          Tech Stack: TypeScript, Tailwind CSS, and Next.js
        </p>
        <div className="mt-4">
          <Link
            href="https://bicycles-demo.vercel.app/"
            className="bg-[var(--green-100)] py-2 px-6 text-black rounded-md hover:bg-[var(--green-200)] transition-colors duration-300"
          >
            View Project
          </Link>
        </div>
      </div>

      <div className="p-5 h-full max-w-sm bg-black text-white rounded-lg shadow-lg border-2 border-white">
        <h2 className="text-2xl font-semibold text-[var(--green-100)] mb-2">
          Yoom
        </h2>
        <p className="text-sm mb-4">
          This project is a Zoom clone built with Next.js, utilizing GetStream
          SDK for chat and real-time messaging, and Clerk for user
          authentication. It provides a simple and efficient platform for video
          calls, similar to Zoom, with chat functionality integrated for
          seamless communication during meetings.
        </p>
        <p className="text-xs text-gray-400 mb-4">Updated 3 months ago</p>
        <p className="text-xs text-gray-400">
          Tech Stack: TypeScript, Tailwind CSS, and Next.js
        </p>
        <div className="mt-4">
          <Link
            href="https://yoom-kappa-one.vercel.app/"
            className="bg-[var(--green-100)] py-2 px-6 text-black rounded-md hover:bg-[var(--green-200)] transition-colors duration-300"
          >
            View Project
          </Link>
        </div>
      </div>

      <div className="p-5 h-full max-w-sm bg-black text-white rounded-lg shadow-lg border-2 border-white">
        <h2 className="text-2xl font-semibold text-[var(--green-100)] mb-2">
          StashIt
        </h2>
        <p className="text-sm mb-4">
          This project is a Google Drive-like clone built with Next.js and
          TypeScript, using Appwrite (BaaS) providing cloud storage
          functionality where users can upload, manage, and download files. The
          app features a user-friendly interface for managing files and folders,
          similar to Google Drive, along with real-time sync and a secure
          authentication system.
        </p>
        <p className="text-xs text-gray-400 mb-4">Updated 3 months ago</p>
        <p className="text-xs text-gray-400">
          Tech Stack: TypeScript, Tailwind CSS, and Next.js
        </p>
        <div className="mt-4">
          <Link
            href="https://stash-it-alpha.vercel.app/"
            className="bg-[var(--green-100)] py-2 px-6 text-black rounded-md hover:bg-[var(--green-200)] transition-colors duration-300"
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsListing;
