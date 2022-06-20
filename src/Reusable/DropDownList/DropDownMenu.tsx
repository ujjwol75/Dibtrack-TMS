import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

type Props = {
  CustomMenuButton?: any
  // using option does not render children
  options?: any
  children?: any
  handleBlurFunction?: any
}

const DropDownMenu = (props: Props) => {
  const { CustomMenuButton, options, children, handleBlurFunction } = props
  return (
    <Menu as="div" className={"relative"}>
      <div>
        <Menu.Button >
          {CustomMenuButton}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        afterLeave={
          handleBlurFunction ?
            () => handleBlurFunction()
            :
            () => { /* JUST AN EMPTY FUNCTION */ }
        }
      >
        <Menu.Items className="absolute right-0 mt-2 w-fit origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {
            options ?
              options?.map((elem: any, index: number) => (
                <Menu.Item key={index} >
                  {({ active }) => (
                    <div
                      onClick={elem.action}
                      className={`${active ? 'bg-gray-200' : 'text-gray-800'} 
                    group flex w-full items-center rounded-md px-4 py-2 text-sm space-x-2`}
                    >
                      <span>
                        {elem.icon}
                      </span>
                      <span>
                        {elem.title}
                      </span>
                    </div>
                  )}
                </Menu.Item>
              )) :
              <>
                {children}
              </>
          }
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropDownMenu