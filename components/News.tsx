"use client";
import React, { useEffect, useState } from "react";
import { inter, playfair } from "@/app/fonts";
import { getNewsPosts } from "@/lib/db";
interface Post {
  id: number;
  created_at: string;
  title: string;
  description: string;
  topic: string;
  comments: [];
  reactions: string;
}
const News = () => {
  const [posts, setPosts] = useState<Post[]>();
  useEffect(() => {
    const func = async () => {
      const response = await getNewsPosts();
      setPosts(response);
    };

    func();
  }, []);
  return (
    <div>
      <h1 className="text-4xl mb-5">News and Forum</h1>
      <div className="w-full flex gap-5  ">
        {posts?.map((post) => (
          <div
            className="border-2 p-6 w-full md:w-1/3 flex flex-col justify-between rounded-2xl shadow-lg"
            key={post.id}
          >
            <p
              className={`${playfair.className} text-3xl font-bold text-[var(--green-100)] mb-2`}
            >
              {post.title}
            </p>
            <p className={`${inter.className} text-xl mb-4`}>
              {post.description}
            </p>
            <div className="text-white flex justify-between text-sm border-t border-[var(--green-100)] pt-2">
              <span className="text-2xl">{post.created_at.split("T")[0]}</span>
              <span>{post.topic}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
