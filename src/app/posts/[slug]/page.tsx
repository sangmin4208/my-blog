import MarkdownViewer from "@/app/components/markdown-viewer"
import { getPostBySlug } from "@/services/posts"
import { notFound } from "next/navigation"
import React from "react"

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
    <div>
      <h1>
        {post.title} ({post.path})
      </h1>
      <MarkdownViewer>{post.content}</MarkdownViewer>
    </div>
  )
}
