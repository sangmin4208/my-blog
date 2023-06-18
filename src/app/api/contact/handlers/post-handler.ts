import { ContactForm, contactFormSchema } from "@/app/types/contact-form"
import { sendEmail } from "@/services/email"

export const postHandler = async (req: Request) => {
  return validateBody(req, async (body) => {
    const { email, message } = body
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
  })
}

async function validateBody(
  req: Request,
  callback: (body: ContactForm) => Promise<Response>
) {
  const body = await req.json()
  try {
    if (contactFormSchema.parse(body)) {
      return callback(body)
    }

    return new Response(
      JSON.stringify({
        message: "올바르지 않은 형식입니다.",
      })
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "올바르지 않은 형식입니다.",
      })
    )
  }
}
