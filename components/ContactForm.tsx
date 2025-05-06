"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { sendMessage } from "@/lib/db";
import { toast } from "sonner";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("General");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Send logic here (email service, backend, etc.)
    
    const fingerprint = {
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      hardwareConcurrency: navigator.hardwareConcurrency,
      screen: {
        width: screen.width,
        height: screen.height,
        colorDepth: screen.colorDepth,
      },
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      email: email,
    };
    try {
      await sendMessage(email, topic, message, fingerprint);
      setEmail("");
      setTopic("General");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending your message. Please try again later.");
      return;
    }
    setSent(true);
    toast.success("Sent Message Successfully!", {
      description: "I will get back to you within 24hrs! thanks 😊",
      richColors: true,
    });
    localStorage.setItem("user", JSON.stringify(fingerprint));
  };
  // console.log({ email, topic, message });

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 text-white max-w-md my-5 p-6 rounded-xl border-2 border-white space-y-4 shadow-lg"
    >
      <h2 className="text-3xl font-bold text-yellow-300 tracking-wider">
        Contact Me
      </h2>

      <div>
        <label className="block mb-1 text-yellow-100">Topic</label>
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full px-3 py-2 bg-gray-900 border border-white rounded text-xl"
        >
          <option value="General">General</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Feedback">Feedback</option>
          <option value="Bug Report">Bug Report</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 text-yellow-100">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 bg-gray-900 border border-white rounded text-xl"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block mb-1 text-yellow-100">Message</label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 bg-gray-900 border border-white rounded h-32 text-xl"
          placeholder="Your message here..."
        />
      </div>

      <Button
        type="submit"
        className={`${
          sent ? "bg-yellow-400 disabled" : "bg-yellow-300"
        } text-black hover:bg-yellow-400`}
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
