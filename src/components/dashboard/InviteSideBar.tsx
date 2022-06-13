import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const InviteSideBar = (props: Props) => {
  return (
    <div>
        <div className=" flex flex-col">
           <div className="w-[250px] justify-start  border bg-bgsearchbar
         text-sm text-gray-500  h-screen border-black-100 overflow-auto pl-[30px]">
          <Link to  = "/"> <button className='bg-btncolor  px-2 py-1 rounded-md flex flex-row  mt-5 text-white cursor-pointer'>

                 
                  <ChevronLeftIcon className='h-5 w-5 mr-2 mt-1 ' /> 
                    <p className='mr-2 '>Back</p>
            </button> </Link>
            <div className="mt-4  text-2xl cursor-pointer">settings</div>
            <div className="mt-4  text-2xl text-btncolor cursor-pointer">User workspace</div>
                   <div className="mt-4 cursor-pointer">People</div>
                      <div className=" mt-4 cursor-pointer">
                        Teams
                      </div>
                      
                      <div className=" mt-4  cursor-pointer">Spaces</div>
                      <div className=" mt-4 cursor-pointer">Import/Export</div>
                      <div className=" mt-4 cursor-pointer" >
                        Clickapps
                      </div>
                      <div className=" mt-4 cursor-pointer ">
                      Integrations
                      </div>
                      <div className="mt-4 cursor-pointer">Upgrade</div>
                      <div className="mt-4  cursor-pointer">Trash</div>

                      

                      <div className="mt-4 cursor-pointer "> security and permissions</div>

                      <hr className='bg-gray-700 w-full mt-5 mb-5 cursor-pointer ' />

                      <div className="mt-4  text-lg text-btncolor cursor-pointer ">User Name</div>

                      <div className=" mt-4 cursor-pointer">My settings </div>
                      <div className=" mt-4 cursor-pointer" >
                        workspaces
                      </div>
                      <div className=" mt-4 cursor-pointer">
                      Notifications
                      </div>
                      <div className="mt-4 cursor-pointer">Rewards</div>
                      <div className="mt-4  ">Logout</div>


                      <hr className='bg-gray-700 w-full mt-5 mb-5  cursor-pointer' />

                      <div className="mt-4  text-lg text-btncolor cursor-pointer">MY APPS</div>

                      <div className=" mt-4 cursor-pointer"> Cloud Storage
 </div>
                      <div className=" mt-4 cursor-pointer" >
                      Time Tracking 
                      </div>
                      <div className=" mt-4 cursor-pointer">
                      Slack Notifications 
                      </div>
                      <div className="mt-4 cursor-pointer">Apps </div>
                      <div className="mt-4  cursor-pointer">Calendar </div>
                      <div className="mt-4  cursor-pointer">Zoom  </div>




                    </div>
        </div>
    </div>
  
  )
}

export default InviteSideBar