import Image from "next/image"

interface TagTechProps {
  children: React.ReactNode
  logo: string
  width: number
  height: number
}

export function TagTech({ children, logo, width, height }: TagTechProps) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[#D1D1D1] h-10 px-3 w-fit">
      <Image
        src={`/svg/logo-${logo}.svg`}
        width={width}
        height={height}
        alt="Logo do React"
      />
      <span className="text-gray03 font-inter text-xs font-medium">
        {children}
      </span>
    </div>
  )
}
