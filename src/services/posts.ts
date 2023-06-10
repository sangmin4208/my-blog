import "server-only"

import { Post } from "@/app/types/post"
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
