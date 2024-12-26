import { BtnLink, Button } from "@/components/button"
import { Container } from "@/components/container"
import { ItemTech } from "@/components/home/animationDivisor"

import itemsTech from "@/data/techs-animation.json"
import { Cases } from "@/components/cases"
import { TechSkill } from "@/components/home/skills"
import skills from "@/data/techs-animation.json"
import { BlogCard } from "@/components/blog"
import { Hero } from "@/components/home/hero"

export default function Home() {
  return (
    <>
      {/* <Hero />

      <section className="bg-blueLight py-6">
        <Container>
          <div className="scroll-wrapper">
            <div className="scroll-animation scroll-content">
              {itemsTech.map((item, index) => (
                <ItemTech
                  key={index}
                  image={item.icon}
                  width={item.width}
                  height={item.height}
                >
                  {item.name}
                </ItemTech>
              ))}
              {itemsTech.map((item, index) => (
                <ItemTech
                  key={index}
                  image={item.icon}
                  width={item.width}
                  height={item.height}
                >
                  {item.name}
                </ItemTech>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Cases />

      <section>
        <Container>
          <div className="flex justify-between">
            <div>
              <div className="space-y-2">
                <span className="text-gray03 font-inter text-lg font-semibold">
                  Olá, prazer 👋🏻
                </span>
                <h2 className="font-semibold">Charles Almeida</h2>
                <h4 className="font-inter font-semibold text-lg text-gray03">
                  Desenvolvedor Front-end
                </h4>
              </div>
              <p className="text-gray03 opacity-80 mt-6 mb-8 max-w-lg">
                Um profissional dedicado com bacharelado em Sistemas de
                Informação pela Universidade Federal de Alagoas. Como
                desenvolvedor Front-end, trago experiência na criação de
                interfaces intuitivas, ao unir os conhecimentos de Design Visual
                e Design de Experiência do Usuário (UX Design). Comprometido em
                fornecer código de qualidade e solucionar problemas.
              </p>
              <Button icon="file" color="secondary">
                Download CV
              </Button>
            </div>
            <div className="max-w-lg">
              <ul className="grid grid-cols-3 gap-y-4 gap-x-2">
                {skills.map((skill) => (
                  <li key={skill.name}>
                    <TechSkill
                      icon={skill.icon}
                      name={skill.name}
                      width={skill.width}
                      height={skill.height}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-28">
        <Container>
          <div>
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
          </div>
        </Container>
      </section> */}
    </>
  )
}
