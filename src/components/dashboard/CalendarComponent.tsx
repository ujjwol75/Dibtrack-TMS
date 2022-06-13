import React, { Fragment,useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import { Menu } from "@headlessui/react";
import { Dialog, Transition } from '@headlessui/react';
import {XIcon} from '@heroicons/react/solid';
import CalendarRightBar from "./CalendarRightBar";



const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function CalendarComponent() {

  const [currentSelectedDate, setCurrentSelectedDate] = useState(new Date())
    const [currentSelectedSlot, setCurrentSelectedSlot] = useState({})

    const handleSelect = () => {
        
        console.log("clicked")
        setIsOpen(true)
        
     };

  let [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState("");

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function sendModal(){
    setIsOpen(false)
    console.log(inputValue)
  }

  return (
    <div className="App">

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <XIcon className="h-6 w-6" onClick={closeModal}/>
                    <textarea
                      className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                      "
                        id="exampleFormControlTextarea1"
                        placeholder="Your message"
                        value={inputValue}
                        onChange={e=>setInputValue(e.target.value)}
                    ></textarea>
                  </Dialog.Title>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={sendModal}
                    >
                      Send
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div  style={{display:"flex"}}>
        <div className="h-screen overflow-scroll" style={{width:"1200px"}}>
        <Calendar
               localizer={localizer}
               // events={myEventsList}
               events={[]}
               startAccessor="start"
               endAccessor="end"
               views={['month']}
               selectable={true}
               onSelectSlot={handleSelect}
               popup={true}
               // slotPropGetter={() => }
               // date={new Date()}
               // onNavigate={handleSelectNavigate}
               className="w-full cursor-pointer"
               style={{height:"800px", margin:"0 10px 0 0px",backgroundColor:"white"}}
               
            
            />
        </div>
      
          <CalendarRightBar />
      </div>

      
    </div>
  );
}

export default CalendarComponent;

