"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { createPost } from "@/lib/db";
import { toast } from "sonner";

interface Comment {
  user: string,
  date: string,
}

const CreatePostForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("General");
  const [created, setCreated] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Send logic here (email service, backend, etc.)
    try {
      await createPost(topic, title, description);

      setTitle('');setDescription('');setTopic('');
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending your message. Please try again later.");
      return;
    }
    setCreated(true);
    toast.success("Created Post Successfully!", {
      description: "View it on news!! 😊",
      richColors: true,
    });
  };
  // console.log({ email, topic, message });

  return (
    <form
    onSubmit={handleSubmit}
    className="bg-zinc-800 text-white max-w-xl w-full my-8 p-8 rounded-2xl border border-zinc-800 shadow-2xl space-y-6"
  >
    <h2 className="text-4xl font-extrabold text-yellow-400 tracking-tight">New Post</h2>
  
    <div className="space-y-1">
      <label className="text-sm text-yellow-100 font-medium">Category/Topic</label>
      <select
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        <option value="General">General</option>
        <option value="Collaboration">Collaboration</option>
        <option value="Programming">Programming</option>
        <option value="Update">Update</option>
        <option value="Project">Project</option>
      </select>
    </div>
    <div>
        <label className="block mb-1 text-yellow-100">Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 bg-gray-900 border border-white rounded text-xl"
          placeholder="My New Project..."
        />
      </div>
  
    <div className="space-y-1">
      <label className="text-sm text-yellow-100 font-medium">Post Content</label>
      <textarea
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Write your post here..."
        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg h-36 text-base resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </div>
  
    <Button
      type="submit"
      className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg transition duration-200"
    >
      Publish Post
    </Button>
  </form>
  );
};

export default CreatePostForm;
