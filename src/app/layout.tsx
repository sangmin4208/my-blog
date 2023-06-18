import Footer from "./components/footer"
import Header from "./components/header"
import { Open_Sans } from "next/font/google"

const open_sans = Open_Sans({ subsets: ["latin"] })
import "./globals.css"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={
          open_sans.className + " flex flex-col mx-auto max-w-6xl container"
        }
      >
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
