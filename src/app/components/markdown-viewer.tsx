"use client"
import React from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import SyntaxHighlighter from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs"
import remarkGfm from "remark-gfm"
interface Props {
  children: string
}
export default function MarkdownViewer({ children }: Props) {
  return (
    <ReactMarkdown
      className="prose dark:prose-invert lg:prose-xl"
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, style, ...props }) {
          const match = /language-(\w+)/.exec(className || "")
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              style={dracula}
              language={match[1]}
              PreTag="div"
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          )
        },
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
