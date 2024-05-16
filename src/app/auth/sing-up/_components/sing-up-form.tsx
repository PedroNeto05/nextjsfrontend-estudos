'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderCircle, CircleCheck, CircleX } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import axios, { HttpStatusCode } from 'axios'
import { z } from 'zod'
import { config } from '@/app/config'
import { capitalizeFirstLetter } from '@/app/utils'

const singUpFormSchema = z
  .object({
    firstName: z.string().trim().min(4, 'Minimum 4 characters.'),
    lastName: z.string().trim().min(4, 'Minimum 4 characters.'),
    email: z.string().trim().email(),
    confirmEmail: z.string().trim(),
    password: z
      .string()
      .trim()
      .min(6, 'Password must be at least 4 characters.'),
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: 'Emails not match',
    path: ['confirmEmail'],
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords not match',
    path: ['confirmPassword'],
  })

type SingUpFormSchema = z.infer<typeof singUpFormSchema>

export function SingUpForm() {
  const form = useForm<SingUpFormSchema>({
    resolver: zodResolver(singUpFormSchema),
  })

  const { toast } = useToast()

  async function handleSingUp(data: SingUpFormSchema) {
    try {
      const handleSingUpRequest = await axios.post(
        config.apiUrl + '/user',
        data,
      )

      if (handleSingUpRequest.status === HttpStatusCode.Ok) {
        toast({
          title: 'Sing Up Success ',
          className: 'bg-green-600 text-white',
          action: <CircleCheck />,
        })
      }
    } catch (e) {
      console.log(e)

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
        <CardTitle className='text-xl'>Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSingUp)}
            className='grid gap-4'
          >
            <div className='grid grid-cols-2 gap-4'>
              <FormField
                control={form.control}
                name='firstName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Pedro' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='lastName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <div>
                        <Input placeholder='Neto' {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
                name='confirmEmail'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Email</FormLabel>
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
            <div className='grid gap-2'>
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type='submit'
              className='w-full'
              disabled={form.formState.isSubmitting}
            >
              {!form.formState.isSubmitting && 'Create an account'}
              {form.formState.isSubmitting && (
                <span className='flex items-center gap-4'>
                  Sending <LoaderCircle className='animate-spin' />{' '}
                </span>
              )}
            </Button>
          </form>
        </Form>
        <div className='mt-4 text-center text-sm'>
          Already have an account?{' '}
          <Link href='/auth/sing-in' className='underline'>
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
