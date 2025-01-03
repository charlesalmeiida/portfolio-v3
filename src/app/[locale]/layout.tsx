import type { Metadata } from "next"
import "./globals.css"
import { inter, poppins } from "@/utils/fonts"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"

export const metadata: Metadata = {
  title: "Portfólio | Charles Almeida",
  description: "Portólio de desenvolvedor Front-end Charles Almeida",
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()

  return (
    <html style={{ scrollBehavior: "smooth" }} lang={locale}>
      <body className={`${inter} ${poppins} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
