import { Popover } from '@headlessui/react'
import React from 'react'

type Props = {}

const SpacePopup = (props: Props) => {
  return (
    <>
      <Popover.Panel className="absolute z-10">
            <div className="grid grid-cols-1">
                <a href="/analytics">Analytics</a>
                <a href="/engagement">Engagement</a>
                <a href="/security">Security</a>
                <a href="/integrations">Integrations</a>
            </div>
            
            <img src="/solutions.jpg" alt="" />
     </Popover.Panel>
    </>
  )
}

export default SpacePopup