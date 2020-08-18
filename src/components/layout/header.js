import { StaticQuery, graphql, Link } from 'gatsby'
import PropTypes from "prop-types"
import React from "react"
import { Menu } from 'react-feather'

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
                    menuItems {
                        edges {
                            node {
                                label
                                order
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
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mr-lg-5">
                    <li className="nav-item"><Link className="nav-link" to={`/`}>Home</Link></li>
                    {data.wpgraphql.menu.menuItems.edges.map(item => {
                        if(!item.node.label.toLowerCase().includes('contact')){
                            return <li className="nav-item"><Link className="nav-link" to={`/${item.node.label.toLowerCase()}`}>{item.node.label}</Link></li>
                        } 
                        else if(item.node.label.toLowerCase().includes('contact')){
                            return <Link className="btn-teal btn rounded-pill px-4 ml-lg-4" to={`/${item.node.label.toLowerCase().split(" ").shift()}`}>{item.node.label.toUpperCase()}<i className="fas fa-arrow-right ml-1"></i></Link>
                        } else {
                            return <></>
                        }
                    })}
                </ul>
            </div>
        </div>
        </nav>
        )}
    />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
