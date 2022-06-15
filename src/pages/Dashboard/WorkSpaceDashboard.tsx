import { useState } from "react"
import MidBox from "../../Reusable/BoxLayout/MidBox"
import SmallBox from "../../Reusable/BoxLayout/SmallBox"
import ButtonPopUp from "../../Reusable/SidePopUp/ButtonPopUp"

function WorkSpaceDashboard() {
  
const[sidePopUp,setSidePopUp] = useState(false)
  return (
    <>
      {/* <h1>WorkSpace Dashboard</h1> */}

      {/* <SmallBox/> */}
      {/* <MidBox/> */}

      {/* <ButtonPopUp sidePopup ={sidePopUp}/> */}

      {/* { sidePopUp && <MidBox  /> } */}
     {sidePopUp && <MidBox setBox={undefined}  /> } 
      

    </>
  )
}

export default WorkSpaceDashboard
