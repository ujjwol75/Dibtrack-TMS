import React from 'react'
import Sidebar from '../components/dashboard/Sidebar';
import Calendar_component from '../components/dashboard/Calendar_component';
// import CalendarTest from '../components/dashboard/CalendarTest';



function Dashboard() {
  return (
    <>
    <Sidebar />
    <Calendar_component />
    {/* <CalendarTest /> */}
    </>
  )
}

export default Dashboard
