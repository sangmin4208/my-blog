import { useSearchParams } from "next/navigation"

export const useCategorySearchParam = () => {
  const params = useSearchParams()
  const category = params.get("category")
  return category
}
