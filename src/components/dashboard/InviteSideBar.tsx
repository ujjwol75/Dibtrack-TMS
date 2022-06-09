import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const InviteSideBar = (props: Props) => {
  return (
    <div>
        <div className=" flex flex-col">
           <div className="w-[250px] justify-start  border bg-bgsearchbar
         text-sm text-gray-500  h-screen border-black-100 overflow-scroll pl-[30px]">
          <Link to  = "/"> <button className='bg-btncolor  px-2 py-1 rounded-md flex flex-row  mt-5 text-white'>

                 
                  <ChevronLeftIcon className='h-5 w-5 mr-2 mt-1 ' /> 
                    <p className='mr-2'>Back</p>
            </button> </Link>
            <div className="mt-4  text-2xl">settings</div>
            <div className="mt-4  text-2xl text-btncolor">User workspace</div>
                   <div className="mt-4 ">People</div>
                      <div className=" mt-4">
                        Teams
                      </div>
                      
                      <div className=" mt-4 ">Spaces</div>
                      <div className=" mt-4 ">Import/Export</div>
                      <div className=" mt-4 " >
                        Clickapps
                      </div>
                      <div className=" mt-4 ">
                      Integrations
                      </div>
                      <div className="mt-4 ">Upgrade</div>
                      <div className="mt-4  ">Trash</div>

                      

                      <div className="mt-4  "> security and permissions</div>

                      <hr className='bg-gray-700 w-full mt-5 mb-5 ' />

                      <div className="mt-4  text-lg text-btncolor">User Name</div>

                      <div className=" mt-4 ">My settings </div>
                      <div className=" mt-4 " >
                        workspaces
                      </div>
                      <div className=" mt-4 ">
                      Notifications
                      </div>
                      <div className="mt-4 ">Rewards</div>
                      <div className="mt-4  ">Logout</div>


                      <hr className='bg-gray-700 w-full mt-5 mb-5 ' />

                      <div className="mt-4  text-lg text-btncolor">MY APPS</div>

                      <div className=" mt-4 "> Cloud Storage
 </div>
                      <div className=" mt-4 " >
                      Time Tracking 
                      </div>
                      <div className=" mt-4 ">
                      Slack Notifications 
                      </div>
                      <div className="mt-4 ">Apps </div>
                      <div className="mt-4  ">Calendar </div>
                      <div className="mt-4  ">Zoom  </div>




                    </div>
        </div>
    </div>
  
  )
}

export default InviteSideBar