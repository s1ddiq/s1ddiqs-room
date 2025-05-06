import { inter } from "@/app/fonts";
import Link from "next/link";
import React from "react";

const ProjectsListing = () => {
  return (
    <div className={`${inter.className} flex gap-5 flex-wrap`}>
      <div className="p-6 max-w-sm mx-auto bg-gray-800 text-white rounded-lg shadow-lg border-4 border-white">
        <h2 className="text-2xl font-semibold text-yellow-300 mb-2">
          QuranNet
        </h2>
        <p className="text-sm mb-4">
          QuranNet is the next big portal to connect with the Quran digitally.
          It allows users to read, discover, and truly understand its meaning,
          with built-in translations.
        </p>
        <p className="text-xs text-gray-400 mb-4">Updated 3 days ago</p>
        <p className="text-xs text-gray-400">
          Tech Stack: TypeScript, Tailwind CSS, and Next.js
        </p>
        <div className="mt-4">
          <Link href="https://quran-net-five.vercel.app/">View Project</Link>
        </div>
      </div>

      <div className="p-6 max-w-sm mx-auto bg-gray-800 text-white rounded-lg shadow-lg border-4 border-white mt-6">
        <h2 className="text-2xl font-semibold text-yellow-300 mb-2">
          UpToQuote
        </h2>
        <p className="text-sm mb-4">
          UpToQuote delivers daily doses of inspiration and motivation with
          beautifully curated quotes.
        </p>
        <p className="text-xs text-gray-400 mb-4">Updated last week</p>
        <p className="text-xs text-gray-400">
          Tech Stack: TypeScript, Tailwind CSS, and Next.js using the
          alquran.cloud API
        </p>
        <div className="mt-4">
          <Link href="https://up-to-quote.vercel.app/">View Project</Link>
        </div>
      </div>

      <div className="p-6 max-w-sm mx-auto bg-gray-800 text-white rounded-lg shadow-lg border-4 border-white mt-6">
        <h2 className="text-2xl font-semibold text-yellow-300 mb-2">
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
          <Link href="https://bicycles-demo.vercel.app/">View Project</Link>
        </div>
      </div>

      <div className="p-6 max-w-sm mx-auto bg-gray-800 text-white rounded-lg shadow-lg border-4 border-white mt-6">
        <h2 className="text-2xl font-semibold text-yellow-300 mb-2">Yoom</h2>
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
          <Link href="https://yoom-kappa-one.vercel.app/">View Project</Link>
        </div>
      </div>

      <div className="p-6 max-w-sm mx-auto bg-gray-800 text-white rounded-lg shadow-lg border-4 border-white mt-6">
        <h2 className="text-2xl font-semibold text-yellow-300 mb-2">
          MovieFlix
        </h2>
        <p className="text-sm mb-4">
          Explore movies using the TMDB API in this React Native app. Search,
          browse, and view details like ratings, release dates, and plot
          summaries, all in a smooth and simple interface.
        </p>
        <p className="text-xs text-gray-400 mb-4">Updated 3 weeks ago</p>
        <p className="text-xs text-gray-400">
          Tech Stack: TypeScript, Tailwind CSS, and Next.js
        </p>
        <div className="mt-4">
          <Link href="https://github.com/s1ddiq/MovieFlix">View Project</Link>
        </div>
      </div>

      <div className="p-6 max-w-sm mx-auto bg-gray-800 text-white rounded-lg shadow-lg border-4 border-white mt-6">
        <h2 className="text-2xl font-semibold text-yellow-300 mb-2">Emtor</h2>
        <p className="text-sm mb-4">
          Emtor is a powerful CRM built with Next.js, designed to streamline and
          enhance client-vendor relationships. It provides a seamless platform
          for businesses to manage interactions, improve communication, and
          foster stronger connections effortlessly.
        </p>
        <p className="text-xs text-gray-400 mb-4">Updated last month</p>
        <p className="text-xs text-gray-400">
          Tech Stack: TypeScript, Tailwind CSS, and Next.js
        </p>
        <div className="mt-4">
          <Link href="https://github.com/s1ddiq/Emtor">View Project</Link>
        </div>
      </div>

      <div className="p-6 max-w-sm mx-auto bg-gray-800 text-white rounded-lg shadow-lg border-4 border-white mt-6">
        <h2 className="text-2xl font-semibold text-yellow-300 mb-2">StashIt</h2>
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
          <Link href="https://stash-it-alpha.vercel.app/">View Project</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsListing;
