import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const MenuBar = ({ siteTitle, endLinks }) => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        {siteTitle}
      </Link>

      <label
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        htmlFor="nav-toggle-state"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </label>
    </div>
    <input type="checkbox" id="nav-toggle-state" />
    <div className="navbar-menu">
      <div className="navbar-start">
        <StaticQuery
          query={graphql`
            {
              allSitePage(
                filter: { path: {}, context: { depth: { eq: 1 } } }
                sort: { order: ASC, fields: path }
              ) {
                edges {
                  node {
                    context {
                      id
                      depth
                      parent
                      title
                    }
                    path
                  }
                }
              }
            }
          `}
          render={data => {
            return data.allSitePage.edges.map(article => {
              return (
                <Link
                  to={article.node.path}
                  key={article.node.path}
                  className="navbar-item"
                >
                  {article.node.context.title}
                </Link>
              )
            })
          }}
        />
      </div>
      <div className="navbar-end">
        {endLinks}
      </div>
    </div>
  </nav>
)

MenuBar.propTypes = {
  siteTitle: PropTypes.string,
  endLinks: PropTypes.any,
}

MenuBar.defaultProps = {
  siteTitle: ``,
  endLinks: ``,
}

export default MenuBar
