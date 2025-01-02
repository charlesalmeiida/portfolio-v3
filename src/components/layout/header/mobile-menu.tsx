import navLinks from "@/data/nav-links.json"
import { ChangeLanguage } from "./change-language"
import Link from "next/link"

export function MobileMenu() {
  return (
    <ul className="flex absolute md:hidden mt-28 py-8 bg-blueDark top-0 left-0 w-full flex-col items-center gap-6 md:gap-12">
      {navLinks.map((link) => (
        <li key={link.name}>
          <Link
            className="text-gray01 opacity-80 hover:opacity-100"
            href={link.href}
          >
            {link.name}
          </Link>
        </li>
      ))}
      <div className="w-4/12 h-px sm:hidden bg-gray01"></div>
      <div className="sm:hidden">
        <ChangeLanguage />
      </div>
    </ul>
  )
}
