import { faToilet } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export default function Icon4(props) {
  return (
    <FontAwesomeIcon
      className="Icon"
      style={{
        width: `1em`,
      }}
      icon={faToilet}
    />
  )
}
