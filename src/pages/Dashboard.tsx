import InviteSideBar from '../components/dashboard/InviteSideBar';
import InviteMain from '../components/dashboard/InviteMain';


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
