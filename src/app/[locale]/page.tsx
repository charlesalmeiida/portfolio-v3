import { Cases } from "@/components/cases"
import { Hero } from "@/components/home/hero"
import { Divisor } from "@/components/home/animationDivisor/divisor"
import { About } from "@/components/home/about"
import { BlogSection } from "@/components/blog"
import { SanityDocument } from "next-sanity"
import { client } from "@/sanity/lib/client"

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, mainImage { asset -> {url} }, author->, categories[]->}`

const options = { next: { revalidate: 30 } }

export default async function Home() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options)

  return (
    <>
      <Hero />

      <Divisor />

      <Cases />

      <About />

      <BlogSection posts={posts} />
    </>
  )
}
