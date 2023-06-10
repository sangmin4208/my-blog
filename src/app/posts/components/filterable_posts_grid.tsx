"use client"
import PostsGrid from "@/app/components/posts_grid"
import { Post } from "@/app/types/post"
import React from "react"
import { useFilteredPosts as useFilterPosts } from "../hooks/use_filter_posts"

interface Props {
  posts: Post[]
}

export default function FilterablePostsGrid({ posts }: Props) {
  const filteredPosts = useFilterPosts(posts)
  if (filteredPosts.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <h2 className="font-bold text-xl">
          <span>🤷‍♂️</span> No Posts Found
        </h2>
      </div>
    )
  }
  return <PostsGrid posts={filteredPosts} />
}
