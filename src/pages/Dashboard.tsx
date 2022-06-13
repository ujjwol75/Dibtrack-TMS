
import Space from '../components/Space/Space'
import React from 'react'
import Sidebar from '../components/dashboard/Sidebar';
import CalendarComponent from '../components/dashboard/CalendarComponent';
import InviteSideBar from '../components/dashboard/InviteSideBar';
import InviteMain from '../components/dashboard/InviteMain';
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
