import { UserAddIcon } from '@heroicons/react/solid'
import React from 'react'
import AutoComplete from '../../AutoComplete'

type Props = {
  userState: any
  setUserState: any
  handleAssignUser: any
  userListState: any
  size?:any
}

const UserSelection = (props: Props) => {

  const { userState, setUserState, handleAssignUser, userListState, size="sm" } = props
  return (
    <AutoComplete
      selected={userState}
      setSelected={setUserState}
      handleAPICall={handleAssignUser}
      options={userListState || []}
      multiSelect={true}
      customButton={
        <UserAddIcon
          className={`p-1 ${size === "xs"? "w-7":"w-9"} border-2 border-dashed rounded-full text-gray-400 hover:text-btncolor hover:border-btncolor cursor-pointer`} />
      }
    />
  )
}

export default UserSelection