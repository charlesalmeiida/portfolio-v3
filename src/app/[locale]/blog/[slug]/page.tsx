"use client"

import { builder } from "@builder.io/react"
import { Container } from "@/components/container"
import { useRouter } from "next/navigation"
import { use, useEffect, useState } from "react"
import Image from "next/image"

interface Post {
  title: string
  subtitle: string
  body: string
  image: string
  date: string
  theme: string
  slug: string
}

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)

async function fetchPost(slug: string) {
  const post = await builder.get("blog-article", {
    query: { "data.slug": slug },
  })
  return post ? post.data : null
}

export default function BlogArticle({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const [post, setPost] = useState<Post>()
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function getData() {
      const post = await fetchPost(slug)
      if (!post) {
        router.push("/404")
      } else {
        setPost(post)
        setLoading(false)
      }
    }
    getData()
  }, [slug, router])

  if (loading) {
    return <div>Carregando...</div>
  }

  if (!post) {
    return <div>Post não encontrado.</div>
  }

  return (
    <section className="pt-44 pb-28">
      <Container>
        <div className="flex items-center justify-center gap-4 font-inter font-medium text-base text-gray03">
          <span className="bg-[#21E6C14D] rounded-md p-2">{post.theme}</span>
          <div className="w-1 h-1 rounded-full opacity-60 bg-gray03"></div>
          <span className="opacity-70">{post.date}</span>
        </div>
        <div>
          <h2 className="text-center mx-auto mt-8 font-semibold max-w-[530px]">
            {post.title}
          </h2>
          <p className="text-center mx-auto mt-6 max-w-[503px] text-xl opacity-80">
            {post.subtitle}
          </p>
        </div>
        <div className="mt-14">
          <Image
            className="mx-auto"
            src={post.image}
            alt="Imagem do post"
            width={864}
            height={486}
          />
        </div>
        <div>
          <p>
            {post.body}
          </p>
        </div>
      </Container>
    </section>
  )
}
