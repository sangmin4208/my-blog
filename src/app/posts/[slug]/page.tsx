import MarkdownViewer from "@/app/components/markdown-viewer"
import { getPostBySlug } from "@/services/posts"
import Image from "next/image"
import { notFound } from "next/navigation"
import React from "react"
import { AiTwotoneCalendar } from "react-icons/ai"
interface Params {
  params: {
    slug: string
  }
}

export default async function Page({ params: { slug } }: Params) {
  const post = await getPostBySlug(slug)
  const { path, content, title, description } = post
  if (!post) {
    notFound()
  }
  return (
    <article className="m-4 ">
      <Image
        className="object-cover w-full max-h-1/5 rounded-2xl"
        src={`/images/posts/${path}.png`}
        width={760}
        height={400}
        alt={title}
      />
      <section className="flex flex-col gap-2 p-4">
        <div className="flex items-center gap-2">
          <AiTwotoneCalendar size={24} />
          <h1 className="text-3xl">{title}</h1>
        </div>
        <p className="text-sm font-bold">{description}</p>
      </section>
      <main className="mt-4">
        <MarkdownViewer>{content}</MarkdownViewer>
      </main>
    </article>
  )
}
