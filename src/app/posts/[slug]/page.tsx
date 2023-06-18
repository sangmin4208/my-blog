import { getPostBySlug } from "@/services/posts"
import { notFound } from "next/navigation"
import React from "react"
import PostContent from "./components/post-content"
import PostCoverImage from "./components/post-cover-image"
import PostNavigation from "./components/post-navigation"
interface Params {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params: { slug } }: Params) {
  const post = await getPostBySlug(slug)
  if (!post) {
    notFound()
  }
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function Page({ params: { slug } }: Params) {
  const post = await getPostBySlug(slug)
  if (!post) {
    notFound()
  }
  return (
    <article className="m-4 mb-48">
      <PostCoverImage post={post} />
      <PostContent post={post} />
      <PostNavigation post={post} />
    </article>
  )
}
