// import React, {useState} from 'react'
// import {Calendar, momentLocalizer} from 'react-big-calendar'
// import moment from 'moment'


// type Props = {}
// const localizer = momentLocalizer(moment)

// const CalendarTest = (props: Props) => {

//     const [currentSelectedDate, setCurrentSelectedDate] = useState(new Date())
//     const [currentSelectedSlot, setCurrentSelectedSlot] = useState({})

//     const handleSelect = (slot) => {
//         setCurrentSelectedSlot(slot);
//         setCurrentSelectedDate(slot.start);
//         console.log("clicked")
        
//      };
//   return (
//     <div>
//         <Calendar
//                localizer={localizer}
//                // events={myEventsList}
//                events={[]}
//                startAccessor="start"
//                endAccessor="end"
//                views={['month']}
//                selectable={true}
//                onSelectSlot={handleSelect}
//                popup={true}
//                // slotPropGetter={() => }
//                // date={new Date()}
//                // onNavigate={handleSelectNavigate}
//                style={{height: 500, cursor: "pointer"}}
               
            
//             />
//     </div>
//   )
// }

// export default CalendarTest