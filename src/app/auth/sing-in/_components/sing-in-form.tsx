'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { CircleX } from 'lucide-react'
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormControl,
  FormLabel,
} from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import axios, { HttpStatusCode } from 'axios'
import { config } from '@/app/config'
import { toast } from '@/components/ui/use-toast'
import { capitalizeFirstLetter } from '@/app/utils'
import { useRouter } from 'next/navigation'

const singInFormSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().trim().min(6, 'Password must be at least 4 characters.'),
})

type SingInFormSchema = z.infer<typeof singInFormSchema>

export function SingInForm() {
  const { refresh } = useRouter()
  const form = useForm<SingInFormSchema>({
    resolver: zodResolver(singInFormSchema),
  })

  async function handleSingIn(data: SingInFormSchema) {
    try {
      const handleSingInRequest = await axios.post(
        config.apiUrl + '/user/login',
        data,
        { withCredentials: true },
      )

      if (handleSingInRequest.status === HttpStatusCode.Ok) {
        refresh()
      }
    } catch (e) {
      if (axios.isAxiosError(e) && e.response) {
        toast({
          variant: 'destructive',
          description: capitalizeFirstLetter(e.response.data.error),
          title: 'Sing Up Error',
          action: <CircleX />,
        })
      }
    }
  }

  return (
    <Card className='mx-auto max-w-sm'>
      <CardHeader>
        <CardTitle className='text-2xl'>Login</CardTitle>
        <CardDescription>Enter your credentials below to login</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className='grid gap-4'
            onSubmit={form.handleSubmit(handleSingIn)}
          >
            <div className='grid gap-2'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        placeholder='m@example.com'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='grid gap-2'>
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type='submit' className='w-full'>
              Login
            </Button>
          </form>
        </Form>
        <div className='mt-4 text-center text-sm'>
          Don&apos;t have an account?{' '}
          <Link href='/auth/sing-up' className='underline'>
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
