import { Container } from "@/components/container"
import Link from "next/link"
import navLinks from "@/data/nav-links.json"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-blueDark pt-20 pb-4" id="contato">
      <Container>
        <div className="flex flex-col text-center gap-14 md:gap-0 md:flex-row items-center justify-between md:items-start">
          <div className="space-y-6 flex flex-col items-center md:items-start text-gray01">
            <h2 className="font-semibold">Entre em contato:</h2>
            <Link
              className="font-semibold underline font-inter text-xl block"
              href={"mailto:charles.almeida@arapiraca.ufal.br"}
            >
              charles.almeida@arapiraca.ufal.br
            </Link>
          </div>
          <div>
            <nav>
              <ul className="flex items-center gap-8 text-gray01">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-14 justify-center md:justify-end mt-20">
              <Image
                src={"/svg/icon-linkeding-white.svg"}
                width={20}
                height={19}
                alt="Logo do LinkedIn"
              />
              <Image
                src={"/svg/icon-github.svg"}
                width={19}
                height={21}
                alt="Logo do GitHub"
              />
            </div>
          </div>
        </div>
        <span className="text-gray01 mt-14 text-center font-inter text-sm opacity-80 w-full block">
          Desenvolvido por{" "}
          <Link
            target="_blank"
            className="underline"
            href={"https://github.com/charlesalmeiida"}
          >
            Charles
          </Link>{" "}
          © 2025
        </span>
      </Container>
    </footer>
  )
}
