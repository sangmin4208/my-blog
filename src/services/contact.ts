import { ContactForm } from "@/app/types/contact-form"

export async function sendContactEmail(
  url: string,
  { arg }: { arg: ContactForm }
) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  })

  if (!response.ok) {
    throw new Error("Failed to send contact email.")
  }

  return response.json()
}
