import React from "react"

export default function NotFound(params: any) {
  return (
    <div>
      <h1 className="text-3xl">404</h1>
      <p>
        {`The page you're looking for doesn't exist. Please check the URL and try again.`}
      </p>
    </div>
  )
}
