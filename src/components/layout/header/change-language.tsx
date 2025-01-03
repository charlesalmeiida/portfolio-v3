import { Link } from "@/i18n/routing"
import Image from "next/image"
import { useLocale } from "next-intl"

export function ChangeLanguage() {
  const locale = useLocale()

  return (
    <div className="flex items-center gap-1">
      <Link
        className={`flex items-center gap-2 text-sm text-gray01 ${
          locale === "pt" ? "sm:text-gray03" : "sm:text-gray02"
        }`}
        href={"pt"}
      >
        <Image
          src={"/svg/br-flag.svg"}
          alt="Bandeira do Brasil"
          width={16}
          height={16}
        />{" "}
        PT
      </Link>
      <span className="text-gray01 sm:text-gray03">/</span>
      <Link
        className={`flex items-center gap-2 text-sm text-gray01 ${
          locale === "en" ? "sm:text-gray03" : "sm:text-gray02"
        }`}
        href={"en"}
      >
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
