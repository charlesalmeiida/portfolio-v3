import { BlogCard } from "./blog-card";

export function Posts() {
  return (
    <div className="mt-8 md:mt-14 flex flex-wrap gap-8 lg:gap-0 max-w-[1216px] justify-center md:justify-between">
      <BlogCard />
    </div>
  )
}