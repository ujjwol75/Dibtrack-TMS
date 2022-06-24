import { ChevronRightIcon, XIcon } from "@heroicons/react/solid"
import moment from "moment"

type Props = {
  size?: any
  calendarState: any
  setCalendarState: any
  startDateKey?: any
  endDateKey?: any
  handleAPICall: any
  detail?: any
}

const CalendarMenu = (props: Props) => {
  const { size = "md", calendarState, setCalendarState, startDateKey, endDateKey, detail = true } = props

  const handleClearStartDate = () => {
    setCalendarState((prev: any) => ({ ...prev, [startDateKey]: null }))

  }

  const handleClearEndDate = () => {
    setCalendarState((prev: any) => ({ ...prev, [endDateKey]: null }))
    setCalendarState((prev: any) => ({ ...prev, [startDateKey]: null }))

  }

  return (
    <div className="flex items-center">
      {/* START DATE */}
      {calendarState[endDateKey] ?
        calendarState[startDateKey] ?
          <div>
            {detail ? <span>START DATE</span> : null}
            <span className="group flex items-center space-x-1 text-gray-900">
              <p>
                {moment(calendarState[startDateKey]).format("MMM D")}
              </p>
              {/* START DATE CLEAR BUTTON  */}
              <XIcon className="group-hover:visible invisible w-3 text-white bg-btncolor border border-btncolor cursor-pointer rounded-full"
                onClick={() => handleClearStartDate()}
              />
            </span>
          </div>
          :
          <input
            type="date"
            title="START DATE"
            max={moment(calendarState[endDateKey]).format("YYYY-MM-DD")}
            value={calendarState[startDateKey]}
            onChange={(e) => setCalendarState((prev: any) => ({ ...prev, [startDateKey]: e.target.value }))}
            className={`bg-transparent ${size == 'sm' ? 'w-7 h-7 pt-[1px] pr-[1.5px] text-lg' : size == 'md' ? 'w-9 h-9 text-xl p-1 mt-1' : ''} border-2 border-dashed rounded-full outline-none stroke-gray-400 hover:text-btncolor hover:border-btncolor`}
          />
        : null
      }
      {calendarState[endDateKey] ? <ChevronRightIcon className="h-4 text-gray-500" /> : null}

      {/* END DATE */}
      {
        calendarState[endDateKey] ?
          <div>
            {detail ? <span>END DATE</span> : null}
            <span className="group flex items-center space-x-1 text-gray-900">
              <p>
                {moment(calendarState[endDateKey]).format("MMM D")}
              </p>
              {/* END DATE CLEAR BUTTON  */}
              <XIcon className="group-hover:visible invisible w-3 text-white bg-btncolor border border-btncolor cursor-pointer  rounded-full"
                onClick={() => handleClearEndDate()}
              />
            </span>
          </div>
          :
          <input
            type="date"
            title="END DATE"
            min={moment().format("YYYY-MM-DD")}
            value={calendarState[endDateKey]}
            onChange={(e) => setCalendarState((prev: any) => ({ ...prev, [endDateKey]: e.target.value }))}
            className={`bg-transparent ${size == 'sm' ? 'w-7 h-7 pt-[1px] pr-[1.5px] text-lg' : size == 'md' ? 'w-9 h-9 text-xl p-1 mt-1' : ''}  border-2 border-dashed rounded-full outline-none  stroke-gray-400 hover:text-btncolor hover:border-btncolor`}
          />
      }
    </div>
  )
}

export default CalendarMenu