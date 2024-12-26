import Image from "next/image"
import Link from "next/link"

interface ModalCaseProps {
  handleModal: () => void
}

export function ModalCase({ handleModal }: ModalCaseProps) {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="hidden md:block">
        <div>
          <div className="fixed mx-2 pt-10 drop-shadow-2xl inset-0 h-fit md:mx-auto top-20 z-20 bg-white border-[1px] rounded-md border-[#DCDCDC] w-fit">
            <button onClick={handleModal} className="absolute top-4 right-4 font-inter text-sm bg-blue text-gray03 px-2 rounded-full">
              X
            </button>
            <Image
              src={"/img/image-thumb-projeto-hotel.png"}
              width={744}
              height={286}
              alt={`Imagem do projeto`}
            />
            <h2 className="font-poppins font-semibold pl-4 text-2xl text-gray03 mt-6">
              Hotel Daifa
            </h2>
            <p className="font-inter text-sm text-gray03 pl-4 mt-2 max-w-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              nulla, provident doloribus et accusantium ratione magni debitis ex
              facere culpa ab tempora reprehenderit quasi eligendi minus
              repudiandae natus quam! Rerum.
            </p>
            <div className="pl-4 space-x-4 mt-6 pb-6">
              <Link
                className="text-blue font-inter text-base font-medium underline"
                href={"/"}
                target="_blank"
              >
                Link
              </Link>
              <Link
                className="font-inter text-base font-medium underline opacity-80 text-gray03"
                href={"/"}
                target="_blank"
              >
                Link
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
