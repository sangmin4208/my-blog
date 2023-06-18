import { getPostBySlug } from "@/services/posts"
import { notFound } from "next/navigation"
import React from "react"
import PostContent from "./components/post-content"
import PostCoverImage from "./components/post-cover-image"
interface Params {
  params: {
    slug: string
  }
}

export default async function Page({ params: { slug } }: Params) {
  const post = await getPostBySlug(slug)
  if (!post) {
    notFound()
  }
  return (
    <article className="m-4 ">
      <PostCoverImage post={post} />
      <PostContent post={post} />
    </article>
  )
}
