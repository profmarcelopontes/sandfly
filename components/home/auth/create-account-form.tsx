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

import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function CreateAccountForm(props: any) {
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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //console.log(values)

    try {
      const supabase = createClientComponentClient()
      const { email, password } = values

      const {
        // error,
        data: { user }
        // prettier-ignore
      } = await supabase.auth.signUp({
        email,
        password
        //opção para confirmar email, modificar também o router.push mais abaixo
        //options: { emailRedirectTo: `${location.origin}/auth/callback` }
      })

      if (user) {
        form.reset()
        //opção para confirmar email
        //router.push('/')
        router.refresh()
      } else {
        console.log('Teste User: ', user)
      }
    } catch (error) {
      console.log('CreateAccountForm', error)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <span className="text-lg">
        {props.idioma['create-account-form'].message}
      </span>
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
                <FormLabel>
                  {props.idioma['create-account-form'].email}
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder={props.idioma['create-account-form'].email}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {' '}
                  {props.idioma['create-account-form'].messageEmail}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {props.idioma['create-account-form'].password}
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={props.idioma['create-account-form'].password}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {props.idioma['create-account-form'].messagePassword}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="bg-teal-500 " type="submit">
            {props.idioma['create-account-form'].textButton}
          </Button>
        </form>
      </Form>
    </div>
  )
}
