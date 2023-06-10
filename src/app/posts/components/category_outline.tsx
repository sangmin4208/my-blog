"use client"
import Link from "next/link"
import React from "react"
import { useCategorySearchParam } from "../hooks/use_category_search_param"

interface Props {
  labels: string[]
}
export default function CategoryOutline({ labels }: Props) {
  const currentParam = useCategorySearchParam()
  return (
    <nav className="p-2">
      <h3 className="font-bold pr-4 py-1 my-2 border-b-2 border-gray-700 dark:border-gray-200">
        Category
      </h3>
      <ul className="flex flex-col gap-1 ml-2">
        <li>
          <Link
            className={
              currentParam === null
                ? "font-bold text-blue-400 "
                : "hover:text-blue-400"
            }
            href={`/posts`}
          >
            All Posts
          </Link>
        </li>
        {labels.map((label) => (
          <li key={label}>
            <Link
              className={
                currentParam === label
                  ? "font-bold text-blue-400 "
                  : "hover:text-blue-400"
              }
              href={`/posts?category=${label}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
