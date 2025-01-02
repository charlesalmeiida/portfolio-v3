import type { Metadata } from "next"
import "./globals.css"
import { inter, poppins } from "@/utils/fonts"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Portfólio | Charles Almeida",
  description: "Portólio de desenvolvedor Front-end Charles Almeida",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html style={{ scrollBehavior: "smooth" }} lang="pt-br">
      <body className={`${inter} ${poppins} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
