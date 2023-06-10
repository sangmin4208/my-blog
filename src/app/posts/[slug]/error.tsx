"use client"
import Error from "next/error"
import React from "react"

export default function Page({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <h1 className="text-3xl">Error</h1>
      <pre>{error.toString()}</pre>
    </div>
  )
}
