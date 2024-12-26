"use client"

import { useState } from "react"
import { Button } from "../button"
import { Container } from "../container"
import { ProjectCase } from "./project-case"
import projectCase from "@/data/projects-data.json"
import { ModalCase } from "./modal-case"

export function Cases() {
  const [isShowMore, setShowMore] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleProjects = () => setShowMore(!isShowMore)

  const handleModal = () => setShowModal(!showModal)

  return (
    <section className="py-28 relative">
      <Container>
        <div className="text-center space-y-4">
          <span className="text-gray03 leading-5 tracking-[2px]">PROJETOS</span>
          <h2 className="font-semibold">Meus cases</h2>
        </div>
        <div className="mt-14 grid grid-cols-3 gap-8">
          {projectCase.slice(0, 3).map((project) => (
            <ProjectCase
              key={project.projectName}
              alt={project.imageAlt}
              image={project.image}
              projectDescription={project.projectDescription}
              projectName={project.projectName}
              techs={project.techs}
              handleModal={handleModal}
            />
          ))}
          {isShowMore &&
            projectCase
              .slice(3, projectCase.length)
              .map((project) => (
                <ProjectCase
                  handleModal={handleModal}
                  key={project.projectName}
                  alt={project.imageAlt}
                  image={project.image}
                  projectDescription={project.projectDescription}
                  projectName={project.projectName}
                  techs={project.techs}
                />
              ))}
        </div>
        {showModal && <ModalCase handleModal={handleModal} />}
        <div className="flex justify-center mt-14">
          <Button handleProjects={handleProjects} color="secondary">
            {isShowMore ? "Mostrar menos" : "Mostrar mais"}
          </Button>
        </div>
      </Container>
    </section>
  )
}
