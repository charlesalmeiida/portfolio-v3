"use client"

import { BtnLink } from "@/components/button"
import { Container } from "@/components/container"
import { motion } from "motion/react"
import { Posts } from "./posts"
import { SanityDocument } from "next-sanity"

export function BlogSection({ posts }: { posts: SanityDocument[] }) {
  return (
    <section className="py-14 md:py-28" id="blog">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <div className="space-y-4">
              <span className="font-poppins text-gray03 tracking-[2px]">
                BLOG
              </span>
              <h2 className="font-semibold">Posts recentes</h2>
            </div>
            <div className="hidden  ">
              <BtnLink>Todas as publicações</BtnLink>
            </div>
          </div>
          <Posts posts={posts} />
        </motion.div>
      </Container>
    </section>
  )
}
