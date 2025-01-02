"use client"

import { BlogCard } from "@/components/blog"
import { BtnLink } from "@/components/button"
import { Container } from "@/components/container"
import { motion } from "motion/react"

export function BlogSection() {
  return (
    <section className="py-28" id="blog">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-end">
            <div className="space-y-4">
              <span className="font-poppins text-gray03 tracking-[2px]">
                BLOG
              </span>
              <h2 className="font-semibold">Posts recentes</h2>
            </div>
            <div>
              <BtnLink>Todas as publicações</BtnLink>
            </div>
          </div>
          <div className="mt-14 flex justify-between">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
