import { Post, PostData } from "@/app/types/post"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
type Props = {
  post: Post
  type: "previous" | "next"
}

const ICON_CLASS =
  "text-5xl text-yellow-300 m-4 transition-all group-hover:text-6xl"

export default function AdjacentPostCard({
  post: { title, path, description },
  type,
}: Props) {
  return (
    <Link
      href={`/posts/${path}`}
      className="relative w-full overflow-hidden bg-black max-h-56"
    >
      <Image
        className="object-cover w-full opacity-40"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={150}
        height={100}
      />
      <div className="absolute flex items-center justify-around w-full px-8 text-white -translate-x-1/2 -translate-y-1/2 group top-1/2 left-1/2">
        {type === "previous" && <FaArrowLeft className={ICON_CLASS} />}
        <div className="w-full text-center">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="font-bold">{description}</p>
        </div>
        {type === "next" && <FaArrowRight className={ICON_CLASS} />}
      </div>
    </Link>
  )
}
