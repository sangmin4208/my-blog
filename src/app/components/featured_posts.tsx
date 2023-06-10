import { getFeaturedPosts } from "@/services/posts"
import React from "react"
import PostsGrid from "./posts_grid"

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts()
  return (
    <section>
      <h2 className="font-bold text-xl">
        <span>✍️</span> Featured Posts
      </h2>
      <PostsGrid posts={posts} />
    </section>
  )
}
