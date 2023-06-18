import React from "react"
import ContactForm from "./components/contact-form"

export const metadata = {
  title: "Contact Me",
  description: "문의사항이 있으시면 언제든지 연락주세요.",
}

export default function Page() {
  return <ContactForm />
}
