import React from "react"
import { Post } from "../types/post"
import PostCard from "./post_card"

export default function PostsGrid({ posts }: { posts: Post[] }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.title}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  )
}
