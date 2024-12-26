import Image from "next/image"

interface ItemTechProps {
  children: React.ReactNode
  image: string
  width: number
  height: number
}

export function ItemTech({ children, height, image, width }: ItemTechProps) {
  return (
    <div className="flex items-center flex-shrink-0 gap-2 rounded-md bg-[#2C4D8E] w-fit py-2 px-3 text-gray01 font-semibold font-poppins text-lg leading-7">
      <Image
        src={image}
        width={width}
        height={height}
        alt={`Logo do ${children}`}
      />
      {children}
    </div>
  )
}
