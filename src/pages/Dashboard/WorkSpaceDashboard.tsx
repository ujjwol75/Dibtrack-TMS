import { useState } from "react"
import { useParams } from "react-router-dom"
import NotFound from "../Error/NotFound"
import KanbanBoard from "../WorkSpacePages/KanbanBoard"

function WorkSpaceDashboard() {
  
  const params = useParams()
  const { id, slug, spaceId } = params

  switch (slug) {
    case "board":
      return <KanbanBoard />
    case "form":

    default:
      return <NotFound />
  }

}

export default WorkSpaceDashboard
