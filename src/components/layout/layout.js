/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from './footer'
import '../../css/styles.css'
// import AOS from 'aos'
// import 'aos/dist/aos.css';
// AOS.init({
//     disable: 'mobile',
//     duration: 600,
//     once: true
// });

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div id="layoutDefault">
        <div id="layoutDefault_content">
          <main>
            <Header siteTitle={data.site.siteMetadata.title} />
            {children}
          </main>
        </div>
        <div id="layoutDefault_footer">
          <Footer />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
