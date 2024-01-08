'use client'

import { Button } from '@/components/ui/button'
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

import { useState } from 'react'

import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function LoginAccountForm(props: any) {
  const formSchema = z.object({
    email: z
      .string({
        required_error: props.idioma['message-error-email'].msgString
      })
      .email({
        message: props.idioma['message-error-email'].msgEmail
      }),
    password: z
      .string({
        required_error: props.idioma['message-error-password'].msgString
      })
      .min(8, {
        message: props.idioma['message-error-password'].msgMin8
      })
      .max(12)
  })
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const [login, setLogin] = useState('')

  const stateLogin = (message_login:string) => {
    setLogin(message_login)
  }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const supabase = createClientComponentClient()
      const { email, password } = values
      /* eslint-disable */
      const { error, data: { session }
      /* eslint-enable */
      } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if(error) {
        console.log("Error: ", error)
        stateLogin(props.idioma['login-account-form'].errorLogin)
      }else{
        stateLogin("Sucesso")
        console.log("Success")
      }

      form.reset()
      router.refresh()
    } catch (error) {
      console.log('LoginAccountForm:onSubmit', error)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <span className="text-lg">{props.idioma['login-account-form'].message}</span>
      <span className="text-sm text-red-500">{login}</span>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-2"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{props.idioma['login-account-form'].email}</FormLabel>
                <FormControl>
                  <Input placeholder={props.idioma['create-account-form'].email} {...field} />
                </FormControl>
                <FormDescription>{props.idioma['create-account-form'].messageEmail}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{props.idioma['create-account-form'].password}</FormLabel>
                <FormControl>
                  <Input type="password" placeholder={props.idioma['create-account-form'].password} {...field} />
                </FormControl>
                <FormDescription>{props.idioma['create-account-form'].messagePassword}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="bg-teal-500" type="submit">
            {props.idioma['login-account-form'].textButton}
          </Button>
        </form>

      </Form>
      
    </div>
  )
}
