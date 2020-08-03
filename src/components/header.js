import { StaticQuery, graphql } from 'gatsby'
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
            }
        }
    `}
    render={data => (
        <nav className="navbar navbar-marketing navbar-expand-lg bg-transparent navbar-dark fixed-top">
        <div className="container">
            <a className="navbar-brand text-white" href="index.html">{data.wpgraphql.generalSettings.title}</a><button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><Menu /></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mr-lg-5">
                    <li className="nav-item"><a className="nav-link" href="index.html">Home </a></li>
                    <li className="nav-item"><a className="nav-link" href="about.html">About </a></li>
                    <li className="nav-item dropdown dropdown-xl no-caret">
                        <a className="nav-link dropdown-toggle" id="navbarDropdownDemos" href="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services<i className="fas fa-chevron-right dropdown-arrow"></i></a>
                        <div className="dropdown-menu dropdown-menu-right animated--fade-in-up mr-lg-n15" aria-labelledby="navbarDropdownDemos">
                            <div className="row no-gutters">
                                <div className="col-lg-5 p-lg-3 bg-img-cover overlay overlay-primary overlay-70 d-none d-lg-block" style={{ backgroundImage: `url(https://source.unsplash.com/mqO0Rf-PUMs/500x350)` }}>
                                    <div className="d-flex h-100 w-100 align-items-center justify-content-center">
                                        <div className="text-white text-center z-1">
                                            <div className="mb-3">Totality Works</div>
                                            <hr />
                                            <div className="mb-3">What you need, we have.</div>
                                            <a className="btn btn-white btn-sm text-primary rounded-pill" href="services.html">View All</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 p-lg-5">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <a href='/'><h6 className="dropdown-header text-primary">Web</h6></a>
                                            <a className="dropdown-item" href="/">Design</a><a className="dropdown-item" href="/">Development</a><a className="dropdown-item" href="/">Squarespace</a><a className="dropdown-item" href="/">WordPress</a><a className="dropdown-item" href="/">Marketing Analytics</a><a className="dropdown-item" href="/">SEO</a>
                                            <div className="dropdown-divider border-0"></div>
                                            <a href="/"><h6 className="dropdown-header text-primary">Hosting</h6></a>
                                            <a className="dropdown-item" href="/">Email</a><a className="dropdown-item" href="/">Domains</a><a className="dropdown-item" href="/">Personal</a><a className="dropdown-item" href="/">Professional</a><a className="dropdown-item" href="/">Business</a>
                                            <div className="dropdown-divider border-0"></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <a href="/"><h6 className="dropdown-header text-primary">Software</h6></a>
                                            <a className="dropdown-item" href="/">Web Applications</a><a className="dropdown-item" href="/">Mobile Applications</a><a className="dropdown-item" href="/">Desktop Applications</a>
                                            <div className="dropdown-divider border-0"></div>
                                            <a href="/"><h6 className="dropdown-header text-primary">Workshops</h6></a>
                                            <a className="dropdown-item" href="/">Squarespace</a><a className="dropdown-item" href="/">WordPress</a><a className="dropdown-item" href="/">Web Basics</a><a className="dropdown-item" href="/">Design</a><a className="dropdown-item" href="/">Javascript</a><a className="dropdown-item" href="/">React</a><a className="dropdown-item" href="/">PHP</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown dropdown-md no-caret">
                        <a className="nav-link dropdown-toggle" id="navbarDropdownPages" href="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Portfolio<i className="fas fa-chevron-right dropdown-arrow"></i></a>
                        <div className="dropdown-menu dropdown-menu-right animated--fade-in-up" aria-labelledby="navbarDropdownPages">
                            <div className="row no-gutters">
                                <div>
                                    <h6 className="dropdown-header text-primary">Web</h6>
                                    <a className="dropdown-item" href="/">Design</a><a className="dropdown-item" href="/">Development</a><a className="dropdown-item" href="/">Squarespace</a><a className="dropdown-item" href="/">WordPress</a><a className="dropdown-item" href="/">SEO</a>
                                    <div className="dropdown-divider border-0"></div>
                                    <h6 className="dropdown-header text-primary">Software</h6>
                                    <a className="dropdown-item" href="/">Web Applications</a><a className="dropdown-item" href="/">Mobile Applications</a><a className="dropdown-item" href="/">Desktop Applications</a>
                                    <div className="dropdown-divider border-0"></div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown dropdown-lg no-caret">
                        <a className="nav-link dropdown-toggle" id="navbarDropdownPages" href="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog<i className="fas fa-chevron-right dropdown-arrow"></i></a>
                        <div className="dropdown-menu dropdown-menu-right animated--fade-in-up" aria-labelledby="navbarDropdownPages">
                            <div className="row no-gutters">
                                <div className="col-lg-6 p-lg-5">
                                    <h6 className="dropdown-header text-primary">Categories</h6>
                                    <a className="dropdown-item" href="/">Squarespace</a><a className="dropdown-item" href="/">WordPress</a><a className="dropdown-item" href="/">Gatsby</a><a className="dropdown-item" href="/">Design</a><a className="dropdown-item" href="/">Development</a><a className="dropdown-item" href="/">SEO</a><a className="dropdown-item" href="/">Marketing</a><a className="dropdown-item" href="/">Tutorials</a><a className="dropdown-item" href="/">Podcast</a>
                                    <div className="dropdown-divider border-0 d-lg-none"></div>
                                </div>
                                <div className="col-lg-6 p-lg-5">
                                    <h6 className="dropdown-header text-primary">Development</h6>
                                    <a className="dropdown-item" href="/">Javascript</a><a className="dropdown-item" href="/">React</a>
                                    <a className="dropdown-item" href="/">React Native</a><a className="dropdown-item" href="/">GraphQL</a><a className="dropdown-item" href="/">PHP</a>
                                    <a className="dropdown-item" href="/">Python</a><a className="dropdown-item" href="/">Git</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown no-caret">
                        <a className="nav-link dropdown-toggle" id="navbarDropdownDocs" href="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Support<i className="fas fa-chevron-right dropdown-arrow"></i></a>
                        <div className="dropdown-menu dropdown-menu-right animated--fade-in-up" aria-labelledby="navbarDropdownDocs">
                            <a className="dropdown-item py-3" href="/"
                                ><div className="icon-stack bg-primary-soft text-primary mr-4"><i className="fas fa-book-open"></i></div>
                                <div>
                                    <div className="small text-gray-500">Knowledgebase</div>
                                    Collection of pages for common questions and concerns.
                                </div></a
                            >
                            <div className="dropdown-divider m-0"></div>
                            <a className="dropdown-item py-3" href="/"
                                ><div className="icon-stack bg-primary-soft text-primary mr-4"><i className="fas fa-play"></i></div>
                                <div>
                                    <div className="small text-gray-500">Video</div>
                                    Web, Squarespace, & WordPress 101 videos.
                                </div></a
                            >
                            <div className="dropdown-divider m-0"></div>
                            <a className="dropdown-item py-3" href="/"
                                ><div className="icon-stack bg-primary-soft text-primary mr-4"><i className="fas fa-envelope"></i></div>
                                <div>
                                    <div className="small text-gray-500">Email</div>
                                    Contact us if you need any help.
                                </div></a
                            >
                        </div>
                    </li>
                </ul>
                <a className="btn-teal btn rounded-pill px-4 ml-lg-4" href="/contact.html">Contact Us<i className="fas fa-arrow-right ml-1"></i></a>
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
