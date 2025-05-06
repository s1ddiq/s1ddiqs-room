"use client";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const updateStatus = async (status: "online" | "busy" | "offline") => {
  const { error } = await supabase.from("states").upsert(
    [{ id: 1, status }],
    { onConflict: "id" } // 'id' must be PRIMARY KEY or UNIQUE
  );

  if (error) {
    console.error("Error updating status:", error.message);
    throw new Error(error.message);
  }

  console.log("Status updated to:", status);
  return status;
};

export const getStatus = async (): Promise<
  "online" | "busy" | "offline" | null
> => {
  const { data, error } = await supabase
    .from("states")
    .select("status")
    .eq("id", 1)
    .single();

  if (error) {
    console.error("Error fetching status:", error.message);
    return null;
  }

  return data.status;
};

export const sendMessage = async (
  email: string,
  topic: string,
  message: string,
  fingerprint?: {},
) => {
  const { data, error } = await supabase.from("contact").insert([
    {
      message,
      topic,
      email,
      fingerprint,
    },
  ]);

  if (error) {
    console.error("Error fetching status:", error.message);
    return null;
  }
};

export const getAllMessages = async () => {
  const { data, error } = await supabase.from("contact").select("*").order("created_at", { ascending: false });
  if (error) {
    console.error("Error fetching status:", error.message);
    return [];
  }
  return data.map((message) => ({
    id: message.id,
    topic: message.topic,
    message: message.message,
    created_at: message.created_at,
    email: message.email || "", // Ensure email is included, defaulting to an empty string if missing
  }));
};

export const createPost = async (topic: string, title: string, description: string) => {
  const { data, error } = await supabase.from("news").insert([
    {
      topic,
      title,
      description,
    },
  ]);

  if (error) {
    console.error("Error fetching status:", error.message);
    return null;
  }
}


export const getNewsPosts = async ( ) => {
  const {data, error} = await supabase.from('news').select('*');
  
  if (error) {
    console.error("Error fetching status:", error.message);
    return [];
  }

  return data.map((post) => ({
    id: post.id,
    created_at: post.created_at,
    title: post.title,
    description: post.description,
    topic: post.topic,
    comments: post.comments,
    reactions: post.reactions
  }) )
}