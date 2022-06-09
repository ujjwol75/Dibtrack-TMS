import { CheckIcon } from '@heroicons/react/solid'
import React from 'react'

type Props = {
    userType : string
    description: string
    isMember :boolean
    isAdmin: boolean

}

const MemberType = ({userType , description , isAdmin , isMember}: Props) => {
  return ( isAdmin && userType == "Admin" || isMember && userType == "Member" ? (
    <div className="w-full text-sm  rounded text-gray-400 relative p-1 cursor-pointer">
    <h1 className="text-txtcolor">{userType}</h1>
    <p className="mt-2 p-2 bg-bgsearchbar rounded-md text-gray-500 "> {description}</p>
    <CheckIcon className="h-5 w-5 text-blue-500  font-bold absolute top-1   right-3"/>
    </div>
  ):(
    <div className="w-full text-sm  rounded text-gray-400 relative p-1 cursor-pointer">
    <h1 className="text-txtcolor">{userType}</h1>
    <p className="mt-2 p-2"> {description}</p>
    <CheckIcon className="h-5 w-5 text-blue-500  font-bold absolute top-1   right-3 hidden"/>
    </div>
  )
   ) 

  
    
        
    
  
}

export default MemberType