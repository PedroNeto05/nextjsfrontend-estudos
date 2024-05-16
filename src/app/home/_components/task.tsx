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
import { Trash2 } from 'lucide-react'

type TaskProps = {
  title: string
  description: string
}

export function Task(props: TaskProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className='p-4 flex items-center gap-8  overflow-hidden mb-4 cursor-pointer min-h-24'>
          <div className='w-full overflow-hidden max-h-24 relative select-none'>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
              {props.title}
            </h3>
            <p>{props.description}</p>
            <div className='pointer-events-none absolute bottom-0 left-0 right-0 h-[10%] bg-gradient-to-t from-white/100 to-white/10' />
          </div>
          <Card className='border border-border p-4 cursor-pointer'>
            <Trash2 className='text-red-600' />
          </Card>
        </Card>
      </DialogTrigger>
      <DialogContent className='max-w-4xl'>
        <DialogHeader>
          <DialogTitle className='text-4xl'>{props.title}</DialogTitle>
        </DialogHeader>
        <div className='flex items-center'>
          <textarea className='size-full '>{props.description}</textarea>
        </div>
        <DialogFooter className='justify-end'>
          <DialogClose asChild>
            <Button type='button'>Salvar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
