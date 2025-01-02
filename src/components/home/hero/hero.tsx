"use client"

import { Button } from "@/components/button"
import { Container } from "@/components/container"
import Image from "next/image"
import { useEffect, useRef } from "react"
import Typed from "typed.js"
import { motion } from "motion/react"

function MyComponent() {
  const el = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [
          "Desenvolvedor Front-end",
          "Desenvolvedor React",
          "Desenvolvedor Next.js",
        ],
        typeSpeed: 70,
        loop: true,
      })

      return () => {
        typed.destroy()
      }
    }
  }, [])

  return <span ref={el} />
}

export function Hero() {
  return (
    <main>
      <section className="pt-36 pb-20 lg:pb-28">
        <Container>
          <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="space-y-6">
                <span className="text-gray03 leading-5 tracking-[2px]">
                  Olá, eu sou{" "}
                  <strong className="font-semibold">Charles Almeida</strong>
                  👋🏻
                </span>
                <h1 className="text-gray03">
                  <MyComponent />
                </h1>
              </div>
              <p className="text-base md:text-lg text-gray03 opacity-70 leading-7 md:max-w-[520px]">
                Com formação em Sistemas de Informação e conhecimentos em UX e
                UI Design. Conhecimentos esses que combinados me permitem criar
                experiências digitais que são tanto esteticamente agradáveis
                quanto fáceis de usar.
              </p>
              <div className="flex items-center gap-6">
                <Button color="primary" icon="github">
                  GitHub
                </Button>
                <Button color="secondary" icon="linkedin">
                  LinkedIn
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="md:-mr-14"
            >
              <Image
                src={"/svg/bg-hero.svg"}
                width={593}
                height={494}
                alt="Imagem da seção Hero"
              />
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  )
}
