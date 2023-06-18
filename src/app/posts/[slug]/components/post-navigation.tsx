import PostCard from "@/app/components/post_card"
import { PostData } from "@/app/types/post"
import React from "react"
import AdjacentPostCard from "../../../components/adjacent-post-card"

export default function PostNavigation({ post }: { post: PostData }) {
  return (
    <div className="flex justify-between shadow-md">
      {post.previous && (
        <AdjacentPostCard post={post.previous} type="previous" />
      )}
      {post.next && <AdjacentPostCard post={post.next} type="next" />}
    </div>
  )
}
