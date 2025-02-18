import { DateAndTheme } from "@/components/blog/date-and-theme"
import { Container } from "@/components/container"
import { client } from "@/sanity/lib/client"
import { PortableText, SanityDocument } from "next-sanity"
import Image from "next/image"

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`

const options = { next: { revalidate: 30 } }

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options
  )

  return (
    <section className="pb-28 pt-40">
      <Container>
        <div className="flex flex-col items-center space-y-8">
          <DateAndTheme />
          <div className="space-y-6">
            <h2 className="font-semibold mx-auto text-gray03 text-center max-w-full">
              {post.title}
            </h2>
            <p className="text-gray03 text-xl max-w-xl opacity-80 text-center">
              {post.subtitle}
            </p>
          </div>
        </div>
        <div>
          <Image
            src={"/img/image-blog-post.png"}
            width={864}
            height={486}
            alt="Imagem principal do post do blog"
            className="mx-auto mt-14"
          />
        </div>
        <div className="prose max-w-content space-y-4 mx-auto mt-14">
          {Array.isArray(post.body) && <PortableText value={post.body} />}
        </div>
      </Container>
    </section>
  )
}
