import { ScrollArea } from '@/components/ui/scroll-area'
import { Task } from './_components/task'
import { UserNav } from './_components/user-nav'
import { SquareCheck } from 'lucide-react'

const teste =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat essequaerat doloribus. Vel ipsa molestiae illo, eius ut praesentium animi, quisvoluptas, voluptatum tenetur velit excepturi ex alias quas nulla! Loremipsum dolor, sit amet consectetur adipisicing elit. Fugiat esse quaeratdoloribus. Vel ipsa molestiae illo, eius ut praesentium animi, quisvoluptas, voluptatum tenetur velit excepturi ex alias quas nulla! Loremipsum dolor, sit amet consectetur adipisicing elit. Fugiat esse quaeratdoloribus. Vel ipsa molestiae illo, eius ut praesentium animi, quisvoluptas, voluptatum tenetur velit excepturi ex alias quas nulla! Loremipsum dolor, sit amet consectetur adipisicing elit. Fugiat esse quaeratdoloribus. Vel ipsa molestiae illo, eius ut praesentium animi, quisvoluptas, voluptatum tenetur velit excepturi ex alias quas nulla! Loremipsum dolor, sit amet consectetur adipisicing elit. Fugiat esse quaeratdoloribus. Vel ipsa molestiae illo, eius ut praesentium animi, quisvoluptas, voluptatum tenetur velit excepturi ex alias quas nulla! Loremipsum dolor, sit amet consectetur adipisicing elit. Fugiat esse quaeratdoloribus. Vel ipsa molestiae illo, eius ut praesentium animi, quisvoluptas, voluptatum tenetur velit excepturi ex alias quas nulla! Loremipsum dolor, sit amet consectetur adipisicing elit. Fugiat esse quaeratdoloribus. Vel ipsa molestiae illo, eius ut praesentium animi, quisvoluptas, voluptatum tenetur velit excepturi ex alias quas nulla! Loremipsum dolor, sit amet consectetur adipisicing elit. Fugiat esse quaeratdoloribus. Vel ipsa molestiae illo, eius ut praesentium animi, quisvoluptas, voluptatum tenetur velit excepturi ex alias quas nulla!'

//

export default function Home() {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex justify-between p-4 border-b border-border items-center shadow-md '>
        <SquareCheck className='size-10' />
        <UserNav />
      </div>
      <ScrollArea className='h-full p-10 pt-3 pb-0'>
        <Task title='teste' description={teste} />
        <Task title='teste' description={teste} />
        <Task title='teste' description={teste} />
        <Task title='teste' description={teste} />
        <Task title='teste' description={teste} />
        <Task title='teste' description={teste} />
        <Task title='teste' description={teste} />
        <Task title='teste' description={teste} />
        <Task title='teste' description={teste} />
        <Task title='teste' description={teste} />
        <Task title='teste' description={teste} />
        <Task title='teste' description={teste} />
        <Task title='teste' description={teste} />
        <Task title='teste' description={teste} />
        <Task title='teste' description={teste} />
        <Task title='teste' description={teste} />
        <Task title='teste' description={teste} />
        <Task title='teste' description={teste} />
        <Task title='teste' description={teste} />
      </ScrollArea>
    </div>
  )
}
