"use client"
import Link from "next/link"
import React from "react"
import { useSelectedLayoutSegment } from "next/navigation"
export default function Header() {
  const selectedLayoutSegment = useSelectedLayoutSegment()
  return (
    <header className="w-full flex justify-between items-center py-4">
      <Link href="/">
        <h1 className="font-bold text-4xl">{`SangMin's Blog`}</h1>
      </Link>
      <nav className="flex gap-4 uppercase">
        <Link
          href={"/"}
          className={selectedLayoutSegment === null ? "font-bold" : ""}
        >
          home
        </Link>
        <Link
          className={selectedLayoutSegment === "about" ? "font-bold" : ""}
          href={"/about"}
        >
          about
        </Link>
        <Link
          className={selectedLayoutSegment === "posts" ? "font-bold" : ""}
          href={"/posts"}
        >
          posts
        </Link>
        <Link
          className={selectedLayoutSegment === "contact" ? "font-bold" : ""}
          href={"/contact"}
        >
          contact
        </Link>
      </nav>
    </header>
  )
}
