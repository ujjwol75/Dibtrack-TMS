import { Listbox, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import React, { Fragment, useState } from 'react'

type Props = {
  CustomMenuButton?: any
  option?: any
}

const DropDownMenu = (props: Props) => {
  const { CustomMenuButton } = props
  const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
  ]
  const [selectedPerson, setSelectedPerson] = useState(people[0])
  return (
    <div className='relative'>
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <Listbox.Button className={"w-6"}>{selectedPerson.name}</Listbox.Button>
        <Listbox.Options>
          {people.map((person) => (
            <Listbox.Option
              className={"absolute"}
              key={person.id}
              value={person}
              disabled={person.unavailable}
            >
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}

export default DropDownMenu