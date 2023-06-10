import React from "react"
import { Post } from "../types/post"
import PostCard from "./post_card"

export default function PostsGrid({ posts }: { posts: Post[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {posts.map((post) => (
        <li key={post.title}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  )
}
