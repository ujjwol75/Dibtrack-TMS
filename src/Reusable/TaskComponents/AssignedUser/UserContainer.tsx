import React from 'react'
import CircleUserIcon1 from '../../CircleUserIcon/icon1'
import UserSelection from './UserSelection'

type Props = {
  userState: any
  setUserState: any
  handleAssignUser: any
  userListState: any
  size:any
}

const UserContainer = (props: Props) => {

  const { userState, setUserState, handleAssignUser, userListState,size } = props
  return (
    <span className='flex items-center space-x-1'>
      {/* <FlyoutMenu userIconSizeProp="sm" /> */}
      <span className='-space-x-3 flex items-center'>
        <span>
          <CircleUserIcon1 size={size} color="bg-green-500" />
        </span>
        <span >
          <CircleUserIcon1 size={size} color="bg-blue-500" />
        </span>
        <span>
          <CircleUserIcon1 size={size} color="bg-red-500" />
        </span>
      </span>
      <UserSelection
        userState={userState}
        setUserState={setUserState}
        handleAssignUser={handleAssignUser}
        userListState={userListState}
        size={size}
      />
    </span>
  )
}

export default UserContainer