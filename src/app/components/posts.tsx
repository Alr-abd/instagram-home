"use client";

import Image from "next/image";
import postsData from "./../data/posts.json";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import PostItem from "./postItem"

export interface Comment {
  id: number;
  username: string;
  text: string;
}

export interface Post {
  id: number;
  username: string;
  userAvatar: string;
  hasStory: boolean;
  postedAt: string;
  posts: string[];
  likes: number;
  caption: string;
  comments: Comment[];
}

export default function PostList() {
  const posts: Post[] = postsData;

  return (
    <div className="flex flex-col items-center gap-8 py-3">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

