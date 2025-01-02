"use client"

import { useState } from "react"
import { Button } from "../button"
import { Container } from "../container"
import { ProjectCase } from "./project-case"
import projectCase from "@/data/projects-data.json"
import { ModalCase } from "./modal-case"

export interface Project {
  projectName: string
  projectDescription: string
  imageLg: string
  liveLink: string
  repoLink: string
}

export function Cases() {
  const [showModal, setShowModal] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleProjects = () => setShowAll(!showAll)

  const handleModal = (project: Project | null) => {
    setShowModal(!!project)
    setSelectedProject(project)
  }

  const visibleProjets = showAll ? projectCase : projectCase.slice(0, 3)

  return (
    <section className="py-28 relative">
      <Container>
        <div className="text-center space-y-4">
          <span className="text-gray03 leading-5 tracking-[2px]">PROJETOS</span>
          <h2 className="font-semibold">Meus cases</h2>
        </div>
        <div className="mt-14 flex flex-col items-center md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjets.map((project) => (
            <ProjectCase
              liveLink={project.liveLink}
              repoLink={project.repoLink}
              key={project.projectName}
              alt={project.imageAlt}
              image={project.image}
              projectDescription={project.projectDescription}
              projectName={project.projectName}
              techs={project.techs}
              handleModal={handleModal}
              imageLg={project.imageLg}
            />
          ))}
        </div>
        {showModal && selectedProject && (
          <ModalCase
            handleModal={handleModal}
            liveLink={selectedProject.liveLink}
            repoLink={selectedProject.repoLink}
            projectImage={selectedProject.imageLg}
            projetTitle={selectedProject.projectName}
            projectDescription={selectedProject.projectDescription}
          />
        )}
        <div className="flex justify-center mt-14">
          <Button handleProjects={handleProjects} color="secondary">
            {showAll ? "Mostrar menos" : "Mostrar mais"}
          </Button>
        </div>
      </Container>
    </section>
  )
}
