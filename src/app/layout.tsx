import Footer from "./components/footer"
import Header from "./components/header"
import { Open_Sans } from "next/font/google"

const open_sans = Open_Sans({ subsets: ["latin"] })
import "./globals.css"
import { Toaster } from "./components/ui/toaster"

export const metadata = {
  title: {
    default: "sangmin.dev",
    template: `%s | sangmin.dev`,
  },
  description: `sangmin.dev 블로그`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="system">
      <body
        className={
          open_sans.className + " flex flex-col mx-auto max-w-6xl container"
        }
      >
        <Toaster />
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
