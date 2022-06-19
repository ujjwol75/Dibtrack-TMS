import {ChatIcon} from '@heroicons/react/solid'
import React from 'react'

type Props = {}

const CommentBox = (props: Props) => {
  return (
    <div className='w-full border-t-1 border-gray-400  h-[7rem] relative m-2'>
      <textarea placeholder='Comment or type"/" for commands' className='w-full h-full outline-none text-gray-400 p-0'/>
      <ChatIcon className='absolute right-4 top-2 w-8 h-8 text-gray-400'/>
    </div>
  )
}

export default CommentBox