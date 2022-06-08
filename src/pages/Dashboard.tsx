
import Space from '../components/Space/Space'
import React from 'react'
import Sidebar from '../components/dashboard/Sidebar';
import Calendar_component from '../components/dashboard/Calendar_component';
import InviteSideBar from '../components/dashboard/InviteSideBar';
import InviteMain from './Dashboard/InviteMain';
// import CalendarTest from '../components/dashboard/CalendarTest';



function Dashboard() {
  return (
    <>
    <div className="flex flex-row">
    <InviteSideBar />
    <InviteMain />
    </div>
      
    </>
  )
}

export default Dashboard
