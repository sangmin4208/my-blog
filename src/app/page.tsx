import FeaturedPosts from "./components/featured_posts"
import Hero from "./components/hero"

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
    </div>
  )
}
