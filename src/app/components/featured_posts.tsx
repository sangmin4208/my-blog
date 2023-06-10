import { getAllPosts } from "@/services/posts"
import React from "react"
import PostsGrid from "./posts_grid"

export default async function FeaturedPosts() {
  const posts = await getAllPosts()
  return (
    <section>
      <h2 className="font-bold text-xl">
        <span>✍️</span> Featured Posts
      </h2>
      <PostsGrid posts={posts} />
    </section>
  )
}
