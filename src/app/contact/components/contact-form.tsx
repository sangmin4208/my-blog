"use client"
import { FormProvider } from "react-hook-form"
import { useContactForm } from "../hooks/use-contact-form"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { Textarea } from "@/app/components/ui/textarea"

export default function ContactForm() {
  const { form, onSubmit, isSending } = useContactForm()
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 "
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input placeholder="이메일 주소를 입력해주세요." {...field} />
              </FormControl>
              <FormDescription>
                보내실 이메일 주소를 입력해주세요.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>메시지</FormLabel>
              <FormControl>
                <Textarea placeholder="10글자 이상 입력해주세요" {...field} />
              </FormControl>
              <FormDescription>보내실 메시지를 입력해주세요.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isSending} type="submit">
          {isSending ? "전송중..." : "전송"}
        </Button>
      </form>
    </FormProvider>
  )
}
