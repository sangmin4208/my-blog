import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const contactFormSchema = z.object({
  email: z.string().email({ message: "올바르지 않은 이메일 형식입니다." }),
  message: z.string().min(10, { message: "10자 이상 입력해주세요." }),
})

export type ContactForm = z.infer<typeof contactFormSchema>

export const contactFormResolver = zodResolver(contactFormSchema)
