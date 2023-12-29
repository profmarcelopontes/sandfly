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

const formSchema = z.object({
  email: z
    .string({
      required_error: 'E-mail is required'
    })
    .email({
      message: 'Must be a valid email.'
    }),
  password: z
    .string({
      required_error: 'Password is required'
    })
    .min(8, {
      message: 'Password must have lesat 8 characters.'
    })
    .max(12)
})

export default function LoginAccountForm() {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const supabase = createClientComponentClient()
      const { email, password } = values
      // eslint-disable-next-line no-unused-vars
      const {
        error,
        data: { session }
      } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      form.reset()
      router.refresh()
    } catch (error) {
      console.log('LoginAccountForm:onSubmit', error)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <span className="text-lg">It is good to see you again.</span>
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
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="E-mail" {...field} />
                </FormControl>
                <FormDescription>This is your E-mail</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormDescription>This is your Password</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Login</Button>
        </form>
      </Form>
    </div>
  )
}
