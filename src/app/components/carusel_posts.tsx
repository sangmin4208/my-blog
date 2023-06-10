import { getNonFeaturedPosts } from "@/services/posts"
import React from "react"
import MultiCarousel from "./multi-carousel"
import PostCard from "./post_card"

const CarouselPosts = async () => {
  const posts = await getNonFeaturedPosts()
  return (
    <section className="my-4">
      <h2 className="font-bold text-xl">
        <span>😎</span> You may like
      </h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
      </MultiCarousel>
    </section>
  )
}

export default CarouselPosts
