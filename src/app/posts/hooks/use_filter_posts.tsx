import { Post } from "@/app/types/post"
import { useCategorySearchParam } from "./use_category_search_param"

export const useFilteredPosts = (posts: Post[]) => {
  const currentCategory = useCategorySearchParam()
  if (currentCategory === null) {
    return posts
  }
  return posts.filter((post) => post.category === currentCategory)
}
