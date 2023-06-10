import { getAllPosts } from "@/services/posts"
import React from "react"
import CategoryOutline from "./components/category_outline"
import FilterablePostsGrid from "./components/filterable_posts_grid"
import CategoryTitle from "./components/category_title"

export default async function Page() {
  const posts = await getAllPosts()
  // const categories = posts
  //   .map((post) => post.category)
  //   .filter((category, index, self) => self.indexOf(category) === index)
  const categories = Array.from(new Set(posts.map((post) => post.category)))
  return (
    <section className="grid grid-cols-5">
      <div className="col-span-5 md:col-span-4">
        <div className="my-2">
          <CategoryTitle />
        </div>
        <FilterablePostsGrid posts={posts} />
      </div>
      <div className="hidden md:block md:col-span-1 ">
        <CategoryOutline labels={categories} />
      </div>
    </section>
  )
}
