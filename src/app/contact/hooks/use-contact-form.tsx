import { useToast } from "@/app/hooks/use-toast"
import { ContactForm, contactFormResolver } from "@/app/types/contact-form"
import { useForm } from "react-hook-form"

export const useContactForm = () => {
  const form = useForm<ContactForm>({
    resolver: contactFormResolver,
    defaultValues: {
      email: "",
      message: "",
    },
  })
  const { toast } = useToast()

  function onSubmit(values: ContactForm) {
    console.log(values)
    toast({
      title: "성공적으로 전송되었습니다.",
      description: "빠른 시일 내에 답변드리겠습니다.",
    })
    form.reset()
  }

  return {
    form,
    onSubmit,
  }
}
