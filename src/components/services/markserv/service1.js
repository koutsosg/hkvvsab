import { faSink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const counterStyle = {
  /* styles skipped for brevity */
}

export default function Icon1(props) {
  return (
    <div>
      <FontAwesomeIcon className="Icon" icon={faSink} />
    </div>
  )
}
