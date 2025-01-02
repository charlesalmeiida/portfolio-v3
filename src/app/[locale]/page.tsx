import { Cases } from "@/components/cases"
import { Hero } from "@/components/home/hero"
import { Divisor } from "@/components/home/animationDivisor/divisor"
import { About } from "@/components/home/about"
import { BlogSection } from "@/components/blog"

export default function Home() {
  return (
    <>
      <Hero />

      <Divisor />

      <Cases />

      <About />

      <BlogSection />
    </>
  )
}
