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
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={300}
        height={200}
      />
      <div>
        <time>{date.toString()}</time>
        <h3>
          <span>📝</span> {title}
        </h3>
        <p>{description}</p>
        <p>{category}</p>
      </div>
    </Link>
  )
}
