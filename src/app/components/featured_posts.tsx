import { getFeaturedPosts } from "@/services/posts"
import React from "react"
import PostsGrid from "./posts_grid"

const FeaturedPosts = async () => {
  const posts = await getFeaturedPosts()
  return (
    <section className="my-4">
      <h2 className="font-bold text-xl">
        <span>✍️</span> Featured Posts
      </h2>
      <PostsGrid posts={posts} />
    </section>
  )
}

export default FeaturedPosts
