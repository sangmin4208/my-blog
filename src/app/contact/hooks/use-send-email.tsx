import { useToast } from "@/app/hooks/use-toast"
import { ContactForm } from "@/app/types/contact-form"
import { sendContactEmail } from "@/services/contact"
import useSWRMutation from "swr/mutation"

export const useSendEmail = () => {
  const {
    trigger,
    isMutating: isSending,
    error,
  } = useSWRMutation("/api/contact", sendContactEmail)
  const { toast } = useToast()

  const send = async (values: ContactForm, onSuccess: () => void) => {
    await trigger(values, {
      onSuccess() {
        toast({
          title: "성공적으로 전송되었습니다.",
          description: "빠른 시일 내에 답변드리겠습니다.",
        })
        onSuccess()
      },
      onError() {
        toast({
          variant: "destructive",
          title: "전송에 실패하였습니다.",
          description: "잠시 후 다시 시도해주세요.",
        })
      },
    })
  }

  return {
    send,
    isSending,
    error,
  }
}
