"use client"

import React from "react"
import { useCategorySearchParam } from "../hooks/use_category_search_param"

export default function CategoryTitle() {
  const currentCategory = useCategorySearchParam()
  return (
    <h2 className="font-bold text-xl">
      <span>🔥</span>
      {` ${currentCategory === null ? "All Posts" : currentCategory}`}
    </h2>
  )
}
