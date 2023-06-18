import { ContactForm, contactFormSchema } from "@/app/types/contact-form"
import { useForm } from "react-hook-form"
import { useSendEmail } from "./use-send-email"
import { zodResolver } from "@hookform/resolvers/zod"

export const useContactForm = () => {
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  })
  const { send } = useSendEmail()

  function onSubmit(values: ContactForm) {
    console.log(values)
    send(values, form.reset)
  }

  return {
    form,
    onSubmit,
  }
}
