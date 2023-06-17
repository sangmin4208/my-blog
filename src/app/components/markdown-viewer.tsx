import React from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import remarkGfm from "remark-gfm"

interface Props {
  children: string
}
export default function MarkdownViewer({ children }: Props) {
  return (
    <ReactMarkdown
      className="prose dark:prose-invert lg:prose-xl"
      remarkPlugins={[remarkGfm]}
    >
      {children}
    </ReactMarkdown>
  )
}
