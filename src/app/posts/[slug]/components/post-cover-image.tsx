import { PostData } from "@/app/types/post"
import Image from "next/image"
import React from "react"

export default function PostCoverImage({
  post: { path, title },
}: {
  post: PostData
}) {
  return (
    <Image
      className="object-cover w-full max-h-1/5 rounded-2xl"
      src={`/images/posts/${path}.png`}
      width={760}
      height={400}
      alt={title}
    />
  )
}
