import "server-only"

import { Post, PostData } from "@/app/types/post"
import { readFile } from "fs/promises"
import path from "path"

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json")
  const json = await readFile(filePath, "utf-8")
  const posts = JSON.parse(json) as Post[]
  return posts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  )
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts()
  return posts.filter((post) => post.featured)
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts()
  return posts.filter((post) => !post.featured)
}

export async function getPostBySlug(slug: string): Promise<PostData> {
  const posts = await getAllPosts()
  const postIndex = posts.findIndex((post) => post.path === slug)
  const post = posts[postIndex]
  const filePath = path.join(process.cwd(), "data", "posts", `${slug}.md`)
  const content = await readFile(filePath, "utf-8")
  if (!post) {
    throw new Error(`No post found with slug: ${slug}`)
  }
  const nextPost = postIndex === posts.length - 1 ? null : posts[postIndex + 1]
  const previousPost = postIndex === 0 ? null : posts[postIndex - 1]

  return {
    ...post,
    content,
    next: nextPost,
    previous: previousPost,
  }
}
