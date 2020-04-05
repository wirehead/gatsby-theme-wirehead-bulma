import React from "react"
import { Link } from "gatsby"

const Breadcrumbs = ({ depth, breadcrumbs }) => {
  const maxDepth = breadcrumbs.length - 1
  if (depth > 1) {
    return (
      <nav className="breadcrumb is-small is-right" aria-label="breadcrumbs">
        <ul>
          {breadcrumbs.map((crumb, i) => {
            if (maxDepth === i) {
              return (
                <li className="is-active" key={i}>
                  <Link to={crumb.url}>{crumb.name}</Link>
                </li>
              )
            } else {
              return (
                <li key={i}>
                  <Link to={crumb.url}>{crumb.name}</Link>
                </li>
              )
            }
          })}
        </ul>
      </nav>
    )
  } else {
    return <></>
  }
}

export default Breadcrumbs
