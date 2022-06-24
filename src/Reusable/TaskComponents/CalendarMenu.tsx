import { ChevronRightIcon, XIcon } from "@heroicons/react/solid"
import moment from "moment"

type Props = {
  size?: any
  calendarState: any
  setCalendarState: any
  startDateKey?: any
  endDateKey?: any
}

const CalendarMenu = (props: Props) => {
  const { size = "md", calendarState, setCalendarState, startDateKey, endDateKey } = props
  return (
    <div className="flex items-center">
      {/* START DATE */}
      {
        calendarState[startDateKey] ?
          <div>
            <span className="ml-3">START DATE</span>
            <span className="group flex items-center space-x-1 text-gray-900">
              <XIcon className="group-hover:visible invisible w-3 text-btncolor cursor-pointer"
                onClick={() => setCalendarState((prev: any) => ({ ...prev, [startDateKey]: null }))}
              />
              <p>
                {moment(calendarState[startDateKey]).format("MMM Do")}
              </p>
              <ChevronRightIcon className="h-4 text-gray-500" />
            </span>
          </div>
          :
          <input type="date" value={calendarState[startDateKey]} onChange={(e) => setCalendarState((prev: any) => ({ ...prev, [startDateKey]: e.target.value }))}
            className={`bg-transparent ${size == 'sm' ? 'w-7 h-7 pt-[1px] pr-[1.5px] text-lg' : size == 'md' ? 'w-9 h-9 text-xl p-1 mt-1' : ''}  border-2 border-dashed rounded-full outline-none  stroke-gray-400 hover:text-btncolor hover:border-btncolor`}
          />
      }

      {
        calendarState[endDateKey] ?
          <div>
            <span className="ml-3">DUE DATE</span>
            <span className="group flex items-center space-x-1 text-gray-900">
              <XIcon className="group-hover:visible invisible w-3 text-btncolor cursor-pointer"
                onClick={() => setCalendarState((prev: any) => ({ ...prev, [startDateKey]: null }))}
              />
              <p>
                {moment(calendarState[endDateKey]).format("MMM Do")}
              </p>
              <ChevronRightIcon className="h-4 text-gray-500" />
            </span>
          </div>
          :
          <input type="date" value={calendarState[endDateKey]} onChange={(e) => setCalendarState((prev: any) => ({ ...prev, [endDateKey]: e.target.value }))}
            className={`bg-transparent ${size == 'sm' ? 'w-7 h-7 pt-[1px] pr-[1.5px] text-lg' : size == 'md' ? 'w-9 h-9 text-xl p-1 mt-1' : ''}  border-2 border-dashed rounded-full outline-none  stroke-gray-400 hover:text-btncolor hover:border-btncolor`}
          />
      }

      {/* END DATE */}
    </div>
  )
}

export default CalendarMenu