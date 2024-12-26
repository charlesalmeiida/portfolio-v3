import Image from "next/image"
import Link from "next/link"

export function ChangeLanguage() {
  return (
    <div className="flex items-center gap-1">
      <Link className="flex items-center gap-2 text-sm text-gray03" href={"/"}>
        <Image
          src={"/svg/br-flag.svg"}
          alt="Bandeira do Brasil"
          width={16}
          height={16}
        />{" "}
        PT
      </Link>
      <span>/</span>
      <Link className="flex items-center gap-2 text-sm text-gray02" href={"/"}>
        <Image
          src={"/svg/eua-flag.svg"}
          alt="Bandeira dos Estados unidos"
          width={16}
          height={16}
        />{" "}
        EN
      </Link>
    </div>
  )
}
