import { faWrench } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const counterStyle = {
  /* styles skipped for brevity */
}

export default function Icon2(props) {
  return (
    <div>
      <FontAwesomeIcon className="Icon" icon={faWrench} />
    </div>
  )
}
