import { ContactForm, contactFormSchema } from "@/app/types/contact-form"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()
  if (!contactFormSchema.parse(body)) {
    return NextResponse.json(
      { message: "올바르지 않은 형식입니다." },
      { status: 400 }
    )
  }

  const { email, message } = body as ContactForm

  // fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return new Response(
    JSON.stringify({
      message: `Your message has been sent to ${email}.`,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
}
