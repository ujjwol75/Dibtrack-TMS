import {Fragment, useRef, useState} from "react"
import {Popover, Transition} from "@headlessui/react"
import CircleUserIcon from "../../Reusable/CircleUserIcon"
import UserInfoPopup from "../../Reusable/CircleUserIcon/UserInfoPopup"


type Props = {
  userIconSizeProp?: string,
  user:any
}

const FlyoutMenu = (props: Props) => {

  const { userIconSizeProp = "xs" , user } = props

  let timeout: any
  const timeoutDuration = 700

  const buttonRef = useRef<any>(null)
  const [openState, setOpenState] = useState(false)

  const toggleMenu = (open: any) => {
    setOpenState((openState) => !openState)
    buttonRef?.current?.click()
  }

  const onHover = (open: any, action: string) => {
    if (
      (!open && !openState && action === "onMouseEnter") ||
      (open && openState && action === "onMouseLeave")
    ) {

      clearTimeout(timeout)
      timeout = setTimeout(() => toggleMenu(open), timeoutDuration)
    }
  }

  return (
    <div>
      <Popover>
        {({open}) => (
          <div
            onMouseEnter={() => onHover(open, "onMouseEnter")}
            onMouseLeave={() => onHover(open, "onMouseLeave")}

          >
            <Popover.Button ref={buttonRef} className="focus:outline-none">
              <CircleUserIcon size={userIconSizeProp}  />
            </Popover.Button>
            
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel static className="z-10 absolute ">
                <UserInfoPopup/>
              </Popover.Panel>
            </Transition>
          </div>
        )}
      </Popover>
    </div>
  )
}

export default FlyoutMenu