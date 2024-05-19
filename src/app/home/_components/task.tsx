'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Trash2 } from 'lucide-react'
import { useState } from 'react'

type TaskProps = {
  title: string
  description: string
}

export function Task(props: TaskProps) {
  const [description, setDescription] = useState(props.description)
  const [title, setTitle] = useState(props.title)

  return (
    <Dialog>
      <Card className='p-4 flex items-center gap-8  overflow-hidden mb-4 cursor-pointer min-h-24 hover:bg-slate-100'>
        <DialogTrigger asChild>
          <div className='w-full overflow-hidden max-h-24 relative select-none'>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
              {title}
            </h3>
            <p>{description}</p>
            <div className='pointer-events-none absolute bottom-0 left-0 right-0 h-[10%] bg-gradient-to-t from-white/100 to-white/10' />
          </div>
        </DialogTrigger>
        <Card className='border border-border p-4 cursor-pointer'>
          <Trash2 className='text-red-600' />
        </Card>
      </Card>
      <DialogContent className=''>
        <DialogHeader>
          <DialogTitle>
            <Input
              value={title}
              className='text-4xl outline-none border-transparent'
              onChange={(e) => setTitle(e.currentTarget.value)}
            />
          </DialogTitle>
        </DialogHeader>

        <Textarea
          className='size-full'
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
        />

        <DialogFooter className='justify-end'>
          <DialogClose asChild>
            <Button type='button'>Salvar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
