import Link from "next/link"
import { PropsWithChildren } from "react"

export function BtnLink({ children }: PropsWithChildren) {
  return (
    <Link
      href={"/"}
      className="block underline text-blueLight font-inter font-semibold leading-5"
    >
      {children}
    </Link>
  )
}
