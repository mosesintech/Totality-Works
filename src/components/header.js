import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <>
    <nav class="navbar navbar-marketing navbar-expand-lg bg-transparent navbar-dark fixed-top">
      <div class="container">
          <a class="navbar-brand text-white" href="index.html">Totality Works</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i data-feather="menu"></i></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto mr-lg-5">
                  <li class="nav-item"><a class="nav-link" href="index.html">Home </a></li>
                  <li class="nav-item"><a class="nav-link" href="about.html">About </a></li>
                  <li class="nav-item dropdown dropdown-xl no-caret">
                      <a class="nav-link dropdown-toggle" id="navbarDropdownDemos" href="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services<i class="fas fa-chevron-right dropdown-arrow"></i></a>
                      <div class="dropdown-menu dropdown-menu-right animated--fade-in-up mr-lg-n15" aria-labelledby="navbarDropdownDemos">
                          <div class="row no-gutters">
                              <div class="col-lg-5 p-lg-3 bg-img-cover overlay overlay-primary overlay-70 d-none d-lg-block" style={{backgroundImage: `url(https://source.unsplash.com/mqO0Rf-PUMs/500x350")`}}>
                                  <div class="d-flex h-100 w-100 align-items-center justify-content-center">
                                      <div class="text-white text-center z-1">
                                          <div class="mb-3">Totality Works</div>
                                          <hr />
                                          <div class="mb-3">What you need, we have.</div>
                                          <a class="btn btn-white btn-sm text-primary rounded-pill" href="services.html">View All</a>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-7 p-lg-5">
                                  <div class="row">
                                      <div class="col-lg-6">
                                          <a href='/'><h6 class="dropdown-header text-primary">Web</h6></a>
                                          <a class="dropdown-item" href="/">Design</a><a class="dropdown-item" href="/">Development</a><a class="dropdown-item" href="/">Squarespace</a><a class="dropdown-item" href="/">WordPress</a><a class="dropdown-item" href="/">Marketing Analytics</a><a class="dropdown-item" href="/">SEO</a>
                                          <div class="dropdown-divider border-0"></div>
                                          <a href="/"><h6 class="dropdown-header text-primary">Hosting</h6></a>
                                          <a class="dropdown-item" href="/">Email</a><a class="dropdown-item" href="/">Domains</a><a class="dropdown-item" href="/">Personal</a><a class="dropdown-item" href="/">Professional</a><a class="dropdown-item" href="/">Business</a>
                                          <div class="dropdown-divider border-0"></div>
                                      </div>
                                      <div class="col-lg-6">
                                          <a href="/"><h6 class="dropdown-header text-primary">Software</h6></a>
                                          <a class="dropdown-item" href="/">Web Applications</a><a class="dropdown-item" href="/">Mobile Applications</a><a class="dropdown-item" href="/">Desktop Applications</a>
                                          <div class="dropdown-divider border-0"></div>
                                          <a href="/"><h6 class="dropdown-header text-primary">Workshops</h6></a>
                                          <a class="dropdown-item" href="/">Squarespace</a><a class="dropdown-item" href="/">WordPress</a><a class="dropdown-item" href="/">Web Basics</a><a class="dropdown-item" href="/">Design</a><a class="dropdown-item" href="/">Javascript</a><a class="dropdown-item" href="/">React</a><a class="dropdown-item" href="/">PHP</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </li>
                  <li class="nav-item dropdown dropdown-md no-caret">
                      <a class="nav-link dropdown-toggle" id="navbarDropdownPages" href="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Portfolio<i class="fas fa-chevron-right dropdown-arrow"></i></a>
                      <div class="dropdown-menu dropdown-menu-right animated--fade-in-up" aria-labelledby="navbarDropdownPages">
                          <div class="row no-gutters">
                              <div>
                                  <h6 class="dropdown-header text-primary">Web</h6>
                                  <a class="dropdown-item" href="/">Design</a><a class="dropdown-item" href="/">Development</a><a class="dropdown-item" href="/">Squarespace</a><a class="dropdown-item" href="/">WordPress</a><a class="dropdown-item" href="/">SEO</a>
                                  <div class="dropdown-divider border-0"></div>
                                  <h6 class="dropdown-header text-primary">Software</h6>
                                  <a class="dropdown-item" href="/">Web Applications</a><a class="dropdown-item" href="/">Mobile Applications</a><a class="dropdown-item" href="/">Desktop Applications</a>
                                  <div class="dropdown-divider border-0"></div>
                              </div>
                          </div>
                      </div>
                  </li>
                  <li class="nav-item dropdown dropdown-lg no-caret">
                      <a class="nav-link dropdown-toggle" id="navbarDropdownPages" href="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog<i class="fas fa-chevron-right dropdown-arrow"></i></a>
                      <div class="dropdown-menu dropdown-menu-right animated--fade-in-up" aria-labelledby="navbarDropdownPages">
                          <div class="row no-gutters">
                              <div class="col-lg-6 p-lg-5">
                                  <h6 class="dropdown-header text-primary">Categories</h6>
                                  <a class="dropdown-item" href="/">Squarespace</a><a class="dropdown-item" href="/">WordPress</a><a class="dropdown-item" href="/">Gatsby</a><a class="dropdown-item" href="/">Design</a><a class="dropdown-item" href="/">Development</a><a class="dropdown-item" href="/">SEO</a><a class="dropdown-item" href="/">Marketing</a><a class="dropdown-item" href="/">Tutorials</a><a class="dropdown-item" href="/">Podcast</a>
                                  <div class="dropdown-divider border-0 d-lg-none"></div>
                              </div>
                              <div class="col-lg-6 p-lg-5">
                                  <h6 class="dropdown-header text-primary">Development</h6>
                                  <a class="dropdown-item" href="/">Javascript</a><a class="dropdown-item" href="/">React</a>
                                  <a class="dropdown-item" href="/">React Native</a><a class="dropdown-item" href="/">GraphQL</a><a class="dropdown-item" href="/">PHP</a>
                                  <a class="dropdown-item" href="/">Python</a><a class="dropdown-item" href="/">Git</a>
                              </div>
                          </div>
                      </div>
                  </li>
                  <li class="nav-item dropdown no-caret">
                      <a class="nav-link dropdown-toggle" id="navbarDropdownDocs" href="/" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Support<i class="fas fa-chevron-right dropdown-arrow"></i></a>
                      <div class="dropdown-menu dropdown-menu-right animated--fade-in-up" aria-labelledby="navbarDropdownDocs">
                          <a class="dropdown-item py-3" href="/"
                              ><div class="icon-stack bg-primary-soft text-primary mr-4"><i class="fas fa-book-open"></i></div>
                              <div>
                                  <div class="small text-gray-500">Knowledgebase</div>
                                  Collection of pages for common questions and concerns.
                              </div></a
                          >
                          <div class="dropdown-divider m-0"></div>
                          <a class="dropdown-item py-3" href="/"
                              ><div class="icon-stack bg-primary-soft text-primary mr-4"><i class="fas fa-play"></i></div>
                              <div>
                                  <div class="small text-gray-500">Video</div>
                                  Web, Squarespace, & WordPress 101 videos.
                              </div></a
                          >
                          <div class="dropdown-divider m-0"></div>
                          <a class="dropdown-item py-3" href="/"
                              ><div class="icon-stack bg-primary-soft text-primary mr-4"><i class="fas fa-envelope"></i></div>
                              <div>
                                  <div class="small text-gray-500">Email</div>
                                  Contact us if you need any help.
                              </div></a
                          >
                      </div>
                  </li>
              </ul>
              <a class="btn-teal btn rounded-pill px-4 ml-lg-4" href="/contact.html">Contact Us<i class="fas fa-arrow-right ml-1"></i></a>
          </div>
      </div>
  </nav>
  <header class="page-header page-header-dark bg-gradient-primary-to-secondary">
      <div class="page-header-content pt-10">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-lg-6" data-aos="fade-up">
                      <h1 class="page-header-title">Build your website with Totality Works!</h1>
                      <p class="page-header-text mb-5">Whether you simply need online presence or require a powerful custom package, Totality Works has the right solution for you so you can focus more on your customers.</p>
                      <a class="btn btn-teal btn-marketing rounded-pill lift lift-sm" href="contact.html">Contact Us<i class="fas fa-arrow-right ml-1"></i></a><a class="btn btn-link btn-marketing" href="portfolio.html">See our work</a>
                  </div>
                  <div class="col-lg-6 d-none d-lg-block" data-aos="fade-up" data-aos-delay="50"><img class="img-fluid" alt="Web Browser" src="../../assets/img/drawkit/color/drawkit-content-man-color.svg" /></div>
              </div>
          </div>
      </div>
      <div class="svg-border-rounded text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
      </div>
  </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
