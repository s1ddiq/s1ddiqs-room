"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type StatusContextType = {
  status: string;
  setStatus: (status: "online" | "busy" | "offline") => void;
};

const StatusContext = createContext<StatusContextType | undefined>(undefined);

export const StatusProvider = ({ children }: { children: ReactNode }) => {
  const [status, setStatus] = useState<string>("online");

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  );
};

export const useStatus = () => {
  const context = useContext(StatusContext);
  if (!context)
    throw new Error("useStatus must be used within a StatusProvider");
  return context;
};

//   <main className="flex min-h-screen flex-col items-center justify-between px-24 py-5 bg-[url('/images/8351332.gif')] w-full bg-cover bg-no-repeat">
