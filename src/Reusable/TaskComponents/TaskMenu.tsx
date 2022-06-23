import { ColorSwatchIcon, DotsHorizontalIcon, DuplicateIcon, PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/solid'
import DropDownMenu from '../DropDownList/DropDownMenu'

type Props = {
  deleteTaskAction: any
  size: string
  taskId: any
  isCard?: boolean
}

const TaskMenu = (props: Props) => {

  const { deleteTaskAction, size = "sm", taskId, isCard = false } = props
  const menuOptions = [
    { id: '1', title: "Add", icon: <PlusIcon className='w-6 text-blue-500' />, action: () => { console.log("Not Implemented") } },
    { id: '2', title: "Edit", icon: <PencilIcon className='w-6 text-yellow-500' />, action: () => { console.log("Not Implemented") } },
    { id: '3', title: "Create", icon: <ColorSwatchIcon className='w-6 text-green-500' />, action: () => { console.log("Not Implemented") } },
    { id: '4', title: "Duplicate", icon: <DuplicateIcon className='w-6 text-orange-500' />, action: () => { console.log("Not Implemented") } },
    { id: '5', title: "Delete", icon: <TrashIcon className='w-6 text-red-500' />, action: () => deleteTaskAction(taskId, isCard ? isCard : false) },
  ]

  return (
    <DropDownMenu
      options={menuOptions}
      CustomMenuButton={
        <DotsHorizontalIcon
          className={`${size === "xs" ? "w-5" : "w-8 "} mt-2 hover:text-btncolor cursor-pointer`}
        />
      }
    />
  )
}

export default TaskMenu