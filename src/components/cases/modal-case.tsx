import Image from "next/image"
import Link from "next/link"
import { Project } from "./cases"
import { useTranslations } from "next-intl"

interface ModalCaseProps {
  handleModal: (project: Project | null) => void
  projectImage: string
  projetTitle: string
  projectDescription: string
  liveLink: string
  repoLink: string
}

export function ModalCase({
  handleModal,
  liveLink,
  projectDescription,
  projectImage,
  projetTitle,
  repoLink,
}: ModalCaseProps) {
  const t = useTranslations("Cases")

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="hidden md:block">
        <div>
          <div className="fixed mx-2 pt-10 drop-shadow-2xl inset-0 h-fit md:mx-auto top-32 z-20 bg-white border-[1px] rounded-md border-[#DCDCDC] w-fit">
            <button
              onClick={() => handleModal(null)}
              className="absolute top-4 right-4 font-inter text-sm bg-blue text-gray03 px-2 rounded-full"
            >
              X
            </button>
            <Image
              src={projectImage}
              width={735}
              height={332}
              alt={`Imagem do projeto ${projetTitle}`}
            />
            <h2 className="font-poppins font-semibold pl-4 text-2xl text-gray03 mt-6">
              {projetTitle}
            </h2>
            <p className="font-inter text-sm text-gray03 pl-4 mt-2 max-w-xl">
              {projectDescription}
            </p>
            <div className="pl-4 space-x-4 mt-6 pb-6">
              <Link
                className="text-blueLight font-inter text-base font-medium underline"
                href={liveLink}
                target="_blank"
              >
                {t("deploy")}
              </Link>
              <Link
                className="font-inter text-base font-medium underline opacity-80 text-blueLight"
                href={repoLink}
                target="_blank"
              >
                {t("rep")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
