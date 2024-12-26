import Image from "next/image"
import { tv } from "tailwind-variants"

const button = tv({
  base: "flex items-center gap-4 h-11 px-4 rounded-md font-inter text-lg w-fit transition-all duration-300",
  variants: {
    color: {
      primary: "bg-blueLight text-gray01 hover:scale-105",
      secondary:
        "bg-transparant text-blueDark border border-blueDark hover:scale-105",
    },
  },
})

interface ButtonProps {
  color: "primary" | "secondary"
  icon?: "linkedin" | "github" | "file"
  children: React.ReactNode
  handleProjects?: () => void
}

export function Button({
  color = "primary",
  icon,
  children,
  handleProjects,
}: ButtonProps) {
  return (
    <button onClick={handleProjects} className={button({ color: color })}>
      {icon && (
        <Image
          src={
            icon === "linkedin"
              ? "/svg/icon-linkedin.svg"
              : icon === "github"
              ? "/svg/icon-github.svg"
              : "/svg/icon-file.svg"
          }
          alt={`Ícone do ${icon}`}
          width={16}
          height={16}
        />
      )}
      {children}
    </button>
  )
}
