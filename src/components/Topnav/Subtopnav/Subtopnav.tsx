import { Popover, Tab } from '@headlessui/react'
import { SearchIcon, ChevronDownIcon, ChevronUpIcon, FilterIcon, XIcon, PlusIcon, InformationCircleIcon, SparklesIcon, DuplicateIcon, QuestionMarkCircleIcon, AnnotationIcon, CheckIcon, TagIcon, CalendarIcon, XCircleIcon, PencilIcon, ChevronRightIcon, LinkIcon, UserIcon, UsersIcon, EyeIcon, ChevronDoubleRightIcon, ChevronDoubleUpIcon } from '@heroicons/react/solid'
import React,{useState} from 'react'
import Down from '../Down/Down'
import Show from '../Show/Show'
import Collapseasignees from "./Collapseasignees"

type Props = {}

const Subtopnav = (props: Props) => {
    const [enabled, setEnabled] = useState(false)
    const [enabled1,setEnabled1] = useState(false)
    const [enabled2,setEnabled2] = useState(false)
    const [upShow,setUpShow] = useState(true)
    const [collapse,setCollapse] = useState(true)
  return (
    <div>
      <div className='container-2 flex flex-row items-start justify-between px-5 py-2'> 
      <div className='flex flex-row items-center mt-2 cursor-pointer'>
        <SearchIcon className='h-5 w-5'/>
        <input className='border-r-2 outline-none input' placeholder='Search tasks...'/>
        <Popover className="relative">
          {
            upShow?<Popover.Button><ChevronDownIcon className='h-5 w-5' onClick={()=>setUpShow(false)}/></Popover.Button>:<Popover.Button><ChevronUpIcon className='h-5 w-5' onClick={()=>setUpShow(true)}/></Popover.Button>
          }
          {/* <Popover.Button><ChevronDownIcon className='h-5 w-5'/></Popover.Button> */}

          <Popover.Panel className="absolute z-10 border w-80 shadow-2xl">
            <div className="grid grid-cols-1 bg-white p-4">
              <div>
                <span className='pl-4 pt-4 text-gray-400 font-bold'>SEARCH IN</span>
              </div>
              <div>
                <Down enabled={enabled} setEnabled={setEnabled} name={"Task Name"}/>
                <Down enabled={enabled1} setEnabled={setEnabled1} name={"Task Description"}/>
                <Down enabled={enabled2} setEnabled={setEnabled2} name={"Custom Field"}/>
              </div>
            </div>

            <img src="/solutions.jpg" alt="" />
          </Popover.Panel>
        </Popover>
      </div>
      <div>
        <Tab.Group>
          <Tab.List className='flex flex-row items-center flex-wrap' >
            <Tab className='px-5 py-2 flex flex-row hover:bg-gray-300'>
              {/* <div className='flex flex-row'>
                <FilterIcon className='h-5 w-5'/>
                <span>Filter</span>
              </div> */}
              <Popover className="relative">
                <Popover.Button>
                  <div className='flex flex-row'>
                    <FilterIcon className='h-5 w-5'/>
                    <span>Filter</span>
                  </div>
                </Popover.Button>

                <Popover.Panel className="absolute bg-white z-10 mt-10 border p-4 w-96">
                  <div className="grid grid-cols-1">
                    <div className='text-left py-2'>
                      <span className='font-bold'>FILTER</span>
                    </div>
                    <div className='flex flex-row justify-between py-2'>
                      <span>Where</span>
                      <div className='flex flex-row border w-60 px-2 py rounded-lg justify-between'>
                        <span>Select Filter</span>
 {/* <span><ChevronDownIcon className='h-5 w-5'/></span> */}
                        <Popover className="relative">
                          <Popover.Button><span><ChevronDownIcon className='h-5 w-5'/></span></Popover.Button>

                          <Popover.Panel className="absolute z-15 shadow-2xl">
                            <div className="grid grid-cols-1">
                              <a href="/analytics">Analytics</a>
                              <a href="/engagement">Engagement</a>
                              <a href="/security">Security</a>
                              <a href="/integrations">Integrations</a>
                            </div>

                            <img src="/solutions.jpg" alt="" />
                          </Popover.Panel>
                        </Popover>
                      </div>
                      <div>
                        <span><XIcon className='h-5 w-5'/></span>
                      </div>
                    </div>
                    <div className='flex flex-row py-2'>
                      <span><PlusIcon className='h-5 w-5'/></span>
                      <span>Add filters</span>
                    </div>
                    <div className='flex flex-row  justify-between items-center'>
                      <div className='flex flex-row'>
                        <span><InformationCircleIcon className='h-5 w-5'/></span>
                        <span>learn more about clickUp filter</span>
                      </div>
                      <div className='flex flex-row border rounded-lg px-1 py-2'>
                        <span><SparklesIcon className='h-5 w-5'/></span>
                        <span>Templates</span>
                      </div>
                    </div>
                  </div>

                  <img src="/solutions.jpg" alt="" />
                </Popover.Panel>
              </Popover>
            </Tab>
            <Tab className='px-5 py-2 hover:bg-gray-300 flex flex-row'>
              <DuplicateIcon className='h-5 w-5'/>
              {/* <span className='text-purple-600'>Group by: status</span> */}
              <Popover className="relative">
                <Popover.Button><span className='text-purple-600'>Group by: status</span></Popover.Button>

                <Popover.Panel className="absolute bg-white z-10 border w-60 mt-6 shadow-2xl">
                  <div className="grid grid-cols-1 p-4">
                    <div className='text-left flex flex-row items-center py-2'>
                      <span className='pr-4'>GROUP BY</span>
                      <span><QuestionMarkCircleIcon className='h-5 w-5'/></span>
                    </div>
                    <div className='flex flex-row items-center text-left py-2'>
                      <span><AnnotationIcon className='h-5 w-5'/></span>
                      <span>Status (default)</span>
                    </div>
                    <div className='flex flex-row items-center text-left justify-between py-2'>
                      <div className='flex flex-row items-center'>
                        <span><SearchIcon className='h-5 w-5'/></span>
                        <span>Asignee</span>
                      </div>
                      <div>
                        <CheckIcon className='h-5 w-5 text-blue-400 font-bold'/>
                      </div>
                    </div>
                    <div className='flex flex-row items-center text-left py-2'>
                      <span><TagIcon className='h-5 w-5'/></span>
                      <span>Tags</span>
                    </div>
                    <div className='flex flex-row items-center text-left py-2'>
                      <span><CalendarIcon className='h-5 w-5'/></span>
                      <span>Due date</span>
                    </div>
                    <div className='flex flex-row text-left items-center py-2'>
                      <span><XCircleIcon className='h-5 w-5'/></span>
                      <span>None</span>
                    </div>

{/* Chevron right */}

                    <div className='flex flex-row items-center text-left py-2 justify-between'>
                      <div className='flex flex-row items-center text-left'>
                        <span><PencilIcon className='h-5 w-5'/></span>
                        <span>Custom Field</span>
                      </div>
                      <div>
                        <span><ChevronRightIcon className='h-5 w-5'/></span>
                      </div>
                    </div>
                    <hr/>
                    <div className='text-left py-2'>
                      <span>Also group by list</span>
                    </div>
                  </div>

                  <img src="/solutions.jpg" alt="" />
                </Popover.Panel>
              </Popover>
            </Tab>
            <Tab className='px-5 py-2 hover:bg-gray-300 flex flex-row'>
              <LinkIcon className='h-5 w-5'/>
{/* <span>Subtask</span> */}
              <Popover className="relative">
                <Popover.Button><span>Subtask</span></Popover.Button>

                <Popover.Panel className="absolute bg-white shadow-2xl mt-5 z-10 border w-60 p-4">
                  <div className="grid grid-cols-1">
                    <div className='text-left text-gray-400'>
                      <span>SHOW SUBTASKS</span>
                    </div>
                    <div className='flex flex-row justify-between text-left py-4'>
                      <span>Collapse all (default)</span>
                      <span><CheckIcon className='h-5 w-5'/></span>
                    </div>
                    <div className='text-left'>
                      <span>Expand All</span>
                    </div>
                    <div className='text-left py-4'>
                      <span>As separate tasks</span>
                    </div>
                    <div className='text-left'>
                      <span className='text-gray-400'>Use this to filter subtasks</span>
                    </div>
                  </div>

                  <img src="/solutions.jpg" alt="" />
                </Popover.Panel>
              </Popover>
            </Tab>
            <Tab className='px-5 py-2 hover:bg-gray-300 flex flex-row'>
              <UserIcon className='h-5 w-5'/>
              <span>Me</span>
            </Tab>
            <Tab className='px-5 py-2 hover:bg-gray-300 flex flex-row'>
              <UsersIcon className='h-5 w-5'/>
              <span onClick={()=>setCollapse(!collapse)}>Asignees</span>
              </Tab>
            <Tab className='px-5 py-2 hover:bg-gray-300'>
              {/* <div className='flex flex-row'>
                <EyeIcon className='h-5 w-5'/>
                <span>Show</span>
              </div> */}
              <Popover className="relative">
                <Popover.Button>
                  <div className='flex flex-row'>
                    <EyeIcon className='h-5 w-5'/>
                    <span>Show</span>
                  </div>
              </Popover.Button>

                <Show/>
              </Popover>
            </Tab>
            <Tab className='px-5 py-2 hover:bg-gray-300'>...</Tab>
          </Tab.List>
          <Tab.Panels>
            {/* <Tab.Panel>Content 1</Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel> */}
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div>
      {
        collapse ? (
          <div className='collapse1 w-96 border z-100'>
            <div className='p-4'>
              <div className='flex flex-row justify-between'>
                <span>Asignees</span>
                <span><ChevronDoubleRightIcon className='h-5 w-5 text-purple-600'/></span>
              </div>
              <div className='flex flex-row items-center border p-2 mt-2 bg-gray-300 rounded-lg'>
                <span className='font-bold'><SearchIcon className='h-5 w-5 mr-2 text-gray-400'/></span>
                <input className='bg-gray-300' placeholder='search'/>
              </div>
              <div className='flex flex-row justify-between py-3'>
                <span className='text-gray-400'>ASIGNEES</span>
                <span className='text-purple-600'>select all</span>
              </div>
            </div>
            <div className='h-96 overflow-y-auto'>
              <Collapseasignees/>
              <Collapseasignees/>
              <Collapseasignees/>
              <Collapseasignees/>
              <Collapseasignees/>
              <Collapseasignees/>
              <Collapseasignees/>
              <Collapseasignees/>
              <Collapseasignees/>
            </div>
            <hr/>
            <div>
              <div className='flex flex-row justify-between p-4'>
                <span className='text-gray-400'>TEAMS</span>
                <span className='text-purple-600'>select all</span>
            </div>
            </div>
            <hr/>
            <div>
              <p className='text-center'>No results</p>
            </div>
              <div className='flex flex-row text-purple-600 p-4'>
                <UserIcon className='h-5 w-5'/>
                <span>Assigned comments</span>
              </div>
          </div>
        ):(
          <div className='collapse2'>
          </div>
        )
      }
    </div>
    </div>
    
    </div>
  )
}

export default Subtopnav