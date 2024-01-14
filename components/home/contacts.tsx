'use client'

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea"
import { Check } from "lucide-react"

import { useState } from 'react'
// prettier-ignore
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'

import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'



/* eslint-disable @typescript-eslint/no-explicit-any */
export default function ContactForm(props: any) {
  const formSchema = z.object({
      name: z
      .string({
        required_error: props.idioma['message-error-string'].msgString
      })
      .min(1, {
        message: props.idioma['message-error-string'].requerid
      }),
      email: z
      .string({
        required_error: props.idioma['message-error-email'].msgString
      })
      .email({
        message: props.idioma['message-error-email'].msgEmail
      }),
      subject: z
      .string({
        required_error: props.idioma['message-error-string'].msgString
      })
      .min(1, {
        message: props.idioma['message-error-string'].requerid
      }),
      text: z
      .string({
        required_error: props.idioma['message-error-string'].msgString
      })
      .min(1, {
        message: props.idioma['message-error-string'].requerid
      })
  })
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      text: ''
    }
  })

  const [ send, setSend] = useState(false)

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //console.log(values)
   

    try {
     const { name, email, subject, text } = values
     await fetch('/api/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        name: values.name,
        email: values.email,
        subject: values.subject,
        text: values.text,
      }),
    }).then(() => {
        console.log("Sucesso envio de email")
      // Toast notification
    //   toast.success('Your email message has been sent successfully');
    })
    setSend(true)
    form.reset()
    router.refresh()

    } catch (error) {
      console.log('ContactForm', error)
    }
  }
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
        { send ? (
                    <Alert className="text-green-600 border border-green-600">
                        <Check className="w-4 h-4 text-green-600" />
                        <AlertTitle>{props.idioma['alerts'].alertTitle}</AlertTitle>
                        <AlertDescription>
                        {props.idioma['alerts'].alertDescription}
                        </AlertDescription>
                    </Alert>
        ): null}

      <span className="text-2xl text-teal-500 mb-3">
        {props.idioma['contact'].message}
      </span>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-2"
        >
           <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {props.idioma['contact'].name}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={props.idioma['contact'].name}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {' '}
                  {props.idioma['contact'].messageName}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {props.idioma['contact'].email}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={props.idioma['contact'].email}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {' '}
                  {props.idioma['contact'].messageEmail}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
             <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {props.idioma['contact'].subject}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={props.idioma['contact'].subject}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {' '}
                  {props.idioma['contact'].messageSubject}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {props.idioma['contact'].textArea}
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={props.idioma['contact'].textArea}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {' '}
                  {props.idioma['contact'].messageTextArea}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="bg-teal-500 " type="submit">
            {props.idioma['contact'].textButton}
          </Button>
        </form>
      </Form>
      
    </div>
  )
}
