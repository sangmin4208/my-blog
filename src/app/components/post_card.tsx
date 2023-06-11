"use client"

import React from "react"
import { Post } from "../types/post"
import Link from "next/link"
import Image from "next/image"

export default function PostCard({
  post: { title, path, date, description, category },
}: {
  post: Post
}) {
  // const [mouseX, setMouseX] = React.useState(0)
  const [startX, setStartX] = React.useState(0)
  const [endX, setEndX] = React.useState(0)
  return (
    <Link
      href={`/posts/${path}`}
      draggable={"false"}
      onClick={(e) => {
        const diff = endX - startX
        if (Math.abs(diff) > 10) {
          e.preventDefault()
        }
      }}
      onMouseDown={(e) => {
        setStartX(e.clientX)
      }}
      onMouseUp={(e) => {
        setEndX(e.clientX)
      }}
    >
      <article className="overflow-hidden duration-300 rounded-md shadow-md hover:shadow-lg">
        <Image
          draggable={"false"}
          className="w-full"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="p-2 dark:bg-slate-700">
          <div className="flex items-baseline justify-between">
            <h3 className="text-lg font-bold line-clamp-1">
              <span>📝</span> {title}
            </h3>
            <time className="text-xs">{date.toString()}</time>
          </div>
          <p className="w-full line-clamp-1">{description}</p>
          <p>{category}</p>
        </div>
      </article>
    </Link>
  )
}
