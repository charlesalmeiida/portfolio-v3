import Image from "next/image"

interface TechSkillProps {
  name: string
  icon: string
  width: number
  height: number
}

export function TechSkill({ name, icon, width, height }: TechSkillProps) {
  return (
    <div className="flex items-center gap-2 border rounded-full w-fit px-4 py-3">
      <div className="bg-blueLight rounded-full h-8 w-8 flex items-center justify-center">
        <Image src={icon} alt="Logo HTML" width={width} height={height} />
      </div>
      <span className="text-gray03 font-inter text-sm font-medium">{name}</span>
    </div>
  )
}
