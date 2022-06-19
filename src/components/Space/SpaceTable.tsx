import {
  BookmarkIcon,
  StatusOnlineIcon,
  CalendarIcon,
  FlagIcon
} from "@heroicons/react/solid";
import React from 'react'

type Props = {}

const SpaceTable = (props: Props) => {
  return (
    <>
      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <tr className="border-2 border-tableBorder">
            <th className="w-[2rem] inline-block border-2 border-tableBorder"><span
              className=' text-gray-400 text-center '>#</span></th>
            <th className=" w-[10rem] border-r-2 border-tableBorder"><BookmarkIcon
              className='h-4 w-4 inline-block '/><span className='text-gray-400 text-sm ml-1'>TASK NAME</span></th>
            <th className=" w-[10rem] border-2 border-tableBorder"><StatusOnlineIcon
              className='h-4 w-4 inline-block ml-1 '/>
              <span className='text-gray-400 text-sm ml-2'>STATUS</span></th>
            <th className=" w-[10rem] border-2 border-tableBorder"><StatusOnlineIcon
              className='h-4 w-4 inline-block ml-1 '/>
              <span className='text-gray-400 text-sm ml-2'>STATUS</span></th>
            <th className=" w-[10rem] border-2 border-tableBorder"><CalendarIcon
              className='h-4 w-4 inline-block ml-1 '/>
              <span className='text-gray-400 text-sm ml-2'>DUE DATE</span></th>
            <th className=" w-[10rem] border-2 border-tableBorder"><FlagIcon className='h-4 w-4 inline-block ml-1 '/>
              <span className='text-gray-400 text-sm ml-2'>PRIORITY</span></th>
            <th className=" w-[10rem] border-2 border-tableBorder"><FlagIcon className='h-4 w-4 inline-block ml-1 '/>
              <span className='text-gray-400 text-sm ml-2'>PRIORITY</span></th>
            <th className=" w-[10rem] border-2 border-tableBorder"><FlagIcon className='h-4 w-4 inline-block ml-1 '/>
              <span className='text-gray-400 text-sm ml-2'>PRIORITY</span></th>
            <th className=" w-[10rem] border-2 border-tableBorder"><FlagIcon className='h-4 w-4 inline-block ml-1 '/>
              <span className='text-gray-400 text-sm ml-2'>PRIORITY</span></th>

          </tr>
          <tr>
            <td className=" w-[2rem] border-2 border-tableBorder">1</td>
            <td className=" w-[10rem] border-2 border-tableBorder">Maria Anders</td>
            <td className=" w-[10rem] border-2 border-tableBorder">Germany</td>
            <td className=" w-[10rem] border-2 border-tableBorder">Germany</td>
            <td className=" w-[10rem] border-2 border-tableBorder">Germany</td>
            <td className=" w-[10rem] border-2 border-tableBorder">Germany</td>
            <td className=" w-[10rem] border-2 border-tableBorder">Germany</td>
            <td className=" w-[10rem] border-2 border-tableBorder">Germany</td>
            <td className=" w-[10rem] border-2 border-tableBorder">Germany</td>
          </tr>
          <tr>
            <td className=" w-[2rem] border-2 border-tableBorder">1</td>
            <td className=" w-[10rem] border-2 border-tableBorder">Maria Anders</td>
            <td className=" w-[10rem] border-2 border-tableBorder">Germany</td>
            <td className=" w-[10rem] border-2 border-tableBorder">Germany</td>
            <td className=" w-[10rem] border-2 border-tableBorder">Germany</td>
            <td className=" w-[10rem] border-2 border-tableBorder">Germany</td>
            <td className=" w-[10rem] border-2 border-tableBorder">Germany</td>
            <td className=" w-[10rem] border-2 border-tableBorder">Germany</td>
            <td className=" w-[10rem] border-2 border-tableBorder">Germany</td>
          </tr>
          <tr>
            <td className=" w-[2rem] border-2 border-tableBorder">1</td>
            <td className=" w-[10rem] border-2 border-tableBorder">Maria Anders</td>
            <td className=" w-[10rem] border-2 border-tableBorder">Germany</td>
            <td className=" w-[10rem] border-2 border-tableBorder">Germany</td>
            <td className=" w-[10rem] border-2 border-tableBorder">Germany</td>
            <td className=" w-[10rem] border-2 border-tableBorder">Germany</td>
            <td className=" w-[10rem] border-2 border-tableBorder">Germany</td>
            <td className=" w-[10rem] border-2 border-tableBorder">Germany</td>
            <td className=" w-[10rem] border-2 border-tableBorder">Germany</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default SpaceTable