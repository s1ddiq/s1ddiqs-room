"use client";
import { useStatus } from "@/context/StatusProvider";
import { getStatus, updateStatus, getAllMessages } from "@/lib/db";
import React, { useEffect, useState } from "react";
import { inter, jersey10 } from "../fonts";
import { Button } from "@/components/retroui/Button";
import { useRouter } from "next/navigation";
import CreatePostForm from "@/components/CreatePostForm";

interface Message {
  id: number;
  topic: string;
  message: string;
  email: string;
  created_at: string;
}

const AdminPage = () => {
  const [isAuthed, setIsAuthed] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [statusText, setStatusText] = useState("");
  const { status, setStatus } = useStatus();
  const [messages, setMessages] = useState<Message[]>();
  const router = useRouter();
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD!;
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === ADMIN_PASSWORD) {
      // Perform authentication logic here (e.g., check username and password)
      setIsAuthed(true);
    } else {
      alert("Nah bro.");
    }
  };

  const handleUpdateStatus = async (
    newStatus: "online" | "busy" | "offline"
  ) => {
    try {
      // Determine the next status
      // Update the status in the database (make sure the function is awaited)
      await updateStatus(newStatus);

      // If the update was successful, update the local state
      setStatus(newStatus);
    } catch (error) {
      console.error("Error updating status:", error); // Log any error
      alert("An error occurred while updating status.");
    }
  };

  useEffect(() => {
    const getCurrentStatus = async () => {
      try {
        const status = await getStatus();
        if (status) {
          setStatus(status); // Update the status in the context
        } else {
          console.error("Failed to fetch status from the database.");
        }
        setStatusText(status as string);
      } catch (error) {}
    };
    getCurrentStatus();
  }, [status, isAuthed]);

  useEffect(() => {
    const func = async () => {
      try {
      const response = await getAllMessages(); 
      console.log(response);
      setMessages(response); // Update the messages state with the fetched data
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    }
    func();
  }, [isAuthed])
  
  if (!isAuthed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
        <form
          onSubmit={handleLogin}
          className="bg-gray-900 p-6 rounded-xl shadow-xl space-y-4"
        >
          <h2 className="text-2xl font-bold">Admin Login</h2>
          <p>Go away if you're not s1ddiq.</p>
          <input
            type="text"
            placeholder="Username"
            value={username}
             autoComplete="current-password"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center flex-col justify-center bg-gray-950 text-white">
      <h1 className="text-3xl font-bold">Welcome, s1ddiq.</h1>
      <h2 className="text-2xl font-bold mt-8">Settings</h2>
      <p>Status: &nbsp;</p>
      <div
        className={`rounded-lg p-4 bg-zinc-800 text-bold cursor-pointer rounded-lg capitalize ${
          status === "online"
            ? "text-green-500"
            : status === "busy"
            ? "text-yellow-300"
            : "text-red-500"
        }`}
        onClick={() => {
          const nextStatus =
            status === "online"
              ? "busy"
              : status === "busy"
              ? "offline"
              : "online";
          handleUpdateStatus(nextStatus); // Call the function to update status

          // Update the status in the database (make sure the function is awaited)
        }}
      >
        {statusText}
      </div>

      <div className="w-full px-24">
        <p className="text-3xl">Create a New Post</p>
        <div>
          <CreatePostForm />
        </div>
      </div>
      <div className="w-full px-24">
        <p className="text-3xl">Recent Messages</p>
        <div className="flex flex-wrap gap-5">
          {messages?.map((message: any) => (
            <div
              key={message.id}
              className={`${inter.className} bg-white border-4 border-black p-6 rounded-xl my-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black transition-transform hover:scale-[1.01]`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold uppercase tracking-wide">
                  {message.topic}
                </h3>
                <span className="text-sm text-gray-600">
                  {new Date(message.created_at).toLocaleString()}
                </span>
              </div>
              <p className="text-lg mb-4">{message.message}</p>
              <div className="bg-black text-yellow-200 px-3 py-1 rounded-md w-fit text-sm font-mono">
                {message.email}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button onClick={() => router.push("/")} className="my-5">
        View Website
        <span className="text-red-500">* </span>
      </Button>
    </div>
  );
};

export default AdminPage;
