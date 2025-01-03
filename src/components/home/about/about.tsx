"use client"

import { Button } from "@/components/button"
import { Container } from "@/components/container"
import skills from "@/data/techs-animation.json"
import { TechSkill } from "../skills"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"

export function About() {
  const t = useTranslations("About")

  return (
    <section id="about">
      <Container>
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <span className="text-gray03 font-inter text-lg font-semibold">
                {t("tag")}
              </span>
              <h2 className="font-semibold">Charles Almeida</h2>
              <h4 className="font-inter font-semibold text-lg text-gray03">
                {t("subtitle")}
              </h4>
            </div>
            <p className="text-gray03 opacity-80 mt-6 mb-8 max-w-lg">
              {t("p")}
            </p>
            <Button icon="file" color="secondary">
              Download CV
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-lg"
          >
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-2">
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
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
