import { Popover } from '@headlessui/react'
import { PencilIcon, LinkIcon, QuestionMarkCircleIcon, StarIcon, DuplicateIcon, ChevronRightIcon, ShareIcon, SparklesIcon, DotsHorizontalIcon } from '@heroicons/react/solid'
import React from 'react'

type Props = {}

const List = (props: Props) => {
  return (
    <>
      <Popover.Panel className="absolute z-10">
        <div className="grid grid-cols1 border w-72 p-4 bg-white text-black">
            <div className='flex flex-row justify-between items-center text-gray-400 py-4'>
                <div>
                    <span className='font-bold'>VIEW OPOTION</span>
                </div>
                <div className='flex flex-row'>
                    <span><PencilIcon className='h-5 w-5'/></span>
                    <span><LinkIcon className='h-5 w-5'/></span>
                </div>
            </div>
            <div className='flex flex-row items-center text-gray-400 pb-2'>
              <span>This view is required.</span>
              <span><QuestionMarkCircleIcon className='h-5 w-5'/></span>
            </div>
            <div className='flex flex-row items-center text-gray-600 py-2'>
              <span><PencilIcon className='h-5 w-5'/></span>
              <span>Pin</span>
            </div>
            <div className='flex flex-row items-center text-gray-600 py-2'>
              <span><StarIcon className='h-5 w-5'/></span>
              <span>Favorite</span>
            </div>
            <div className='flex flex-row justify-between text-gray-600 py-2'>
              <div className='flex flex-row items-center'>
                <span><DuplicateIcon className='h-5 w-5'/></span>
                <span>Duplicate as</span>
              </div>
              <div>
                <span><ChevronRightIcon className='h-5 w-5'/></span>
              </div>
            </div>
            <div className='flex flex-row items-center text-gray-600 py-2'>
              <span><ShareIcon className='h-5 w-5'/></span>
              <span>Sharing & Permissions</span>
            </div>
            <hr className='py-2'/>
            <div className='flex flex-row items-center justify-between text-gray-600 py-2'>
              <div className='flex flex-row items-center'>
                <span><SparklesIcon className='h-5 w-5'/></span>
                <span>Template Center</span>
              </div>
              <div>
                <span><ChevronRightIcon className='h-5 w-5'/></span>
              </div>
            </div>
            <div className='flex flex-row items-center justify-between text-gray-600 py-2'>
              <div className='flex flex-row items-center'>
                <span><DotsHorizontalIcon className='h-5 w-5'/></span>
                <span>More Settings</span>
              </div>
              <div>
                <span><ChevronRightIcon className='h-5 w-5'/></span>
              </div>
            </div>
          </div>

          <img src="/solutions.jpg" alt="" />
        </Popover.Panel>
    </>
  )
}

export default List