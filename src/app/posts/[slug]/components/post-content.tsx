import MarkdownViewer from "@/app/components/markdown-viewer"
import { PostData } from "@/app/types/post"
import React from "react"
import { AiTwotoneCalendar } from "react-icons/ai"

export default function PostContent({
  post: { title, description, content },
}: {
  post: PostData
}) {
  return (
    <>
      <section className="flex flex-col gap-2 p-4">
        <div className="flex items-center gap-2">
          <AiTwotoneCalendar size={24} />
          <h1 className="text-3xl">{title}</h1>
        </div>
        <p className="text-sm font-bold">{description}</p>
      </section>
      <main className="mt-8 mb-32">
        <MarkdownViewer>{content}</MarkdownViewer>
      </main>
    </>
  )
}
