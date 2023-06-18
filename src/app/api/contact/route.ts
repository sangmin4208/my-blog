import { postHandler } from "./handlers/post-handler"

export async function POST(req: Request) {
  return postHandler(req)
}
