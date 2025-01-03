"use client"

import Image from "next/image"
import { Container } from "@/components/container"
import Link from "next/link"
import navLinks from "@/data/nav-links.json"
import { ChangeLanguage } from "./change-language"
import { Turn as Hamburger } from "hamburger-react"
import { useState } from "react"
import { MobileMenu } from "./mobile-menu"
import { useLocale } from "next-intl"

export function Header() {
  const [isOpen, setOpen] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleMenu = () => setMenuOpen(!isMenuOpen)

  const locale = useLocale()

  return (
    <header className="py-8 drop-shadow-sm fixed w-full top-0 z-50 bg-white">
      <Container>
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image src={"/svg/logo.svg"} alt="Logo" width={168} height={29} />
          </Link>
          <nav>
            {isMenuOpen && <MobileMenu />}
            <ul className="flex items-center gap-6 md:gap-12">
              {navLinks.map((link) => (
                <li className="hidden md:block" key={link.name}>
                  <Link
                    className="text-gray03 opacity-80 hover:opacity-100"
                    href={link.href}
                  >
                    {locale === "pt" ? link.name : link.nameEn}
                  </Link>
                </li>
              ))}
              <div className="md:hidden">
                <Hamburger
                  size={20}
                  toggled={isOpen}
                  toggle={setOpen}
                  color="#212529"
                  onToggle={handleMenu}
                />
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray03"></div>
              <div className="hidden sm:block">
                <ChangeLanguage />
              </div>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}
