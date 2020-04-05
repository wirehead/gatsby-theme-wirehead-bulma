import React from "react"
import PropTypes from "prop-types"

const TwoCol = ({ left, right }) => {
  return (
    <div className="columns">
      <div className="column is-two-thirds">{left}</div>
      <div className="column">
        <hr
          style={{ backgroundColor: "#888", height: "3px" }}
          className="is-hidden-desktop"
        />
        {right}
      </div>
    </div>
  )
}

TwoCol.propTypes = {
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
}

export default TwoCol
