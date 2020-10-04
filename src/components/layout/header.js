import { StaticQuery, graphql, Link } from 'gatsby'
import React from "react"
import { Menu } from 'react-feather'
import Nav from './nav/nav'

const Header = ({ siteTitle }) => (
  <StaticQuery 
    query={graphql`
        query {
            wpgraphql{
                generalSettings {
                    title
                    description
                }
                menu(id: "dGVybToxOA==") {
                    menuItems(first: 10000) {
                        edges {
                            node {
                                label
                                order
                                parentId
                                childItems {
                                    edges {
                                        node {
                                            label
                                            parentId
                                            childItems {
                                                edges {
                                                    node {
                                                        label
                                                        parentId
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `}
    render={data => (
        <nav className="navbar navbar-marketing navbar-expand-lg bg-transparent navbar-dark fixed-top">
        <div className="container">
            <Link className="navbar-brand text-white" to={`/`}>{data.wpgraphql.generalSettings.title}</Link><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><Menu /></button>
            <Nav menu={data.wpgraphql.menu.menuItems}/>
        </div>
        </nav>
        )}
    />
)

export default Header
