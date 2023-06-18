import { ContactForm, contactFormSchema } from "@/app/types/contact-form"
import { sendEmail } from "@/services/email"
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
  try {
    await sendEmail({ email, message })
  } catch (error) {
    console.log(error)
    return new Response(
      JSON.stringify({
        message: "Failed to send email.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  }

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
