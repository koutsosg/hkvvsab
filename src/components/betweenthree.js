import React from "react"
import "./betweenone.css"
import Trust1 from "./trust/Trust1"
import Trust2 from "./trust/Trust2"
import Trust3 from "./trust/Trust3"
const BetweenThree = () => (
  <div className="container-fluid" style={{ backgroundColor: "#747474" }}>
    <div
      className="container p-3 p-md-5"
      style={{
        margin: `0 auto`,
        maxWidth: 1400,
      }}
    >
      <div className="row hk-quote-container d-flex align-items-center justify-content-center pt-5">
        <div
          className="p-3 col-lg-4 col-md-6 col-sm-6 col-12 "
          style={{ width: `18rem` }}
        >
          <Trust1 />
        </div>

        <div
          className="p-3 col-lg-4 col-md-6 col-sm-6 col-12 "
          style={{ width: `18rem` }}
        >
          <Trust2 />
        </div>

        <div
          className="p-3 col-lg-4 col-md-12 col-sm-12 col-12 "
          style={{ width: `18rem` }}
        >
          {" "}
          <Trust3 />
        </div>
      </div>
    </div>
  </div>
)

export default BetweenThree
