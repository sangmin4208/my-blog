import React from "react"
import { Post } from "../types/post"
import Link from "next/link"
import Image from "next/image"

export default function PostCard({
  post: { title, path, date, description, category },
}: {
  post: Post
}) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="rounded-md overflow-hidden shadow-lg">
        <Image
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
