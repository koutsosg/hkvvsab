import { faShower } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const counterStyle = {
  /* styles skipped for brevity */
}

export default function Icon3(props) {
  return (
    <div>
      <FontAwesomeIcon className="Icon" icon={faShower} />
    </div>
  )
}
