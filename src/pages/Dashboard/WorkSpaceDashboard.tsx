import { useState } from "react"
import { useParams } from "react-router-dom"
import NotFound from "../Error/NotFound"
import CalenderPage from "../WorkSpacePages/CalenderPage"
import KanbanBoard from "../WorkSpacePages/KanbanBoard"
import List from "../WorkSpacePages/List"
import Table from "../WorkSpacePages/Table"

function WorkSpaceDashboard() {

  const params = useParams()
  const { id, slug, spaceId } = params

  switch (slug) {
    case "list":
      return <List />
    case "board":
      return <KanbanBoard spaceId={spaceId} />
    case "calendar":
      return <CalenderPage />
    case "gantt":
      return <></>
    case "timeline":
      return <></>
    case "box":
      return <></>
    case "table":
      return <Table />
    case "mindmap":
      return <></>
    case "workload":
      return <></>
    case "activity":
      return <></>
    case "map":
      return <></>
    case "whiteboard":
      return <></>
    case "document":
      return <></>
    case "chart":
      return <></>
    case "embed":
      return <></>
    case "form":
      return <></>

    default:
      return <NotFound />
  }

}

export default WorkSpaceDashboard
