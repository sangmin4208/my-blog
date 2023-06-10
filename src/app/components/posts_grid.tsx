import React from "react"
import { Post } from "../types/post"

export default function PostsGrid({ posts }: { posts: Post[] }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.title}>{post.title}</li>
      ))}
    </ul>
  )
}
