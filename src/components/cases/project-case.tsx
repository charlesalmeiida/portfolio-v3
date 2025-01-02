import Image from "next/image"
import { TagTech } from "./tag-tech"
import { BtnLink } from "../button"
import { Project } from "./cases"

interface Techs {
  name: string
  icon: string
}

interface ProjectCaseProps {
  image: string
  alt: string
  projectName: string
  projectDescription: string
  techs: Techs[]
  liveLink: string
  repoLink: string
  imageLg: string
  handleModal: (project: Project) => void
}

export function ProjectCase({
  image,
  alt,
  projectName,
  projectDescription,
  techs,
  liveLink,
  repoLink,
  imageLg,
  handleModal,
}: ProjectCaseProps) {
  return (
    <div
      onClick={() =>
        handleModal({
          projectName,
          projectDescription,
          imageLg,
          liveLink,
          repoLink,
        })
      }
      className="cursor-pointer border border-[#DCDCDC] w-fit rounded-md hover:scale-105 transition-all"
    >
      <Image src={image} alt={alt} width={384} height={229} />
      <div className="pl-4 pb-6">
        <div className="mt-4 flex items-center gap-2">
          {techs.map((tech) => (
            <TagTech key={tech.name} logo={tech.icon} width={17} height={20}>
              {tech.name}
            </TagTech>
          ))}
        </div>
        <div className="mt-5 space-y-3">
          <h3 className="font-semibold text-left">{projectName}</h3>
          <p className="text-left max-w-[321px] text-gray03 opacity-80 text-sm line-clamp-4">
            {projectDescription}
          </p>
          <BtnLink>Saiba mais</BtnLink>
        </div>
      </div>
    </div>
  )
}
