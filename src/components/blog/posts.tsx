import { BlogCard } from "./blog-card"
import { type SanityDocument } from "next-sanity"

export function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    <div className="mt-8 md:mt-14 flex flex-wrap gap-8 lg:gap-0 max-w-[1216px] justify-center md:justify-between">
      {posts.map((post) => (
        <BlogCard
          key={post._id}
          author={post.author.name}
          categorie={post.categories[0].title}
          date={post.publishedAt}
          image={post.mainImage.asset.url}
          slug={post.slug.current}
          title={post.title}
        />
      ))}
    </div>
  )
}
