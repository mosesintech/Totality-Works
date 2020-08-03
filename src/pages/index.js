import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import * as Icon from 'react-feather'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <header className="page-header page-header-dark bg-gradient-primary-to-secondary">
        <div className="page-header-content pt-10">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h1 className="page-header-title">Build your website with Totality Works!</h1>
                        <p className="page-header-text mb-5">Whether you simply need online presence or require a powerful custom package, Totality Works has the right solution for you so you can focus more on your customers.</p>
                        <a className="btn btn-teal btn-marketing rounded-pill lift lift-sm" href="contact.html">Contact Us<i className="fas fa-arrow-right ml-1"></i></a><a className="btn btn-link btn-marketing" href="portfolio.html">See our work</a>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block" data-aos="fade-up" data-aos-delay="50"><img className="img-fluid" alt="Web Browser" src="../../assets/img/drawkit/color/drawkit-content-man-color.svg" /></div>
                </div>
            </div>
        </div>
        <div className="svg-border-rounded text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
        </div>
      </header>
      <section class="bg-white py-10">
        <div class="container">
            <div class="row text-center">
                <div class="col-lg-4 mb-5 mb-lg-0">
                    <div class="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4"><Icon.Layers /></div>
                    <h3>Solution for all your needs</h3>
                    <p class="mb-0">With a variety of packages for you to choose from, you can rest assured that what you need, we have.</p>
                </div>
                <div class="col-lg-4 mb-5 mb-lg-0">
                    <div class="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4"><Icon.Smartphone /></div>
                    <h3>Modern responsive design</h3>
                    <p class="mb-0">Featuring carefully crafted, mobile-first components, your end product will function beautifully on any device!</p>
                </div>
                <div class="col-lg-4">
                    <div class="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4"><Icon.Code /></div>
                    <h3>Custom development</h3>
                    <p class="mb-0">With our team of experienced developers, we can build the perfect solution for you and your business.</p>
                </div>
            </div>
        </div>
      </section>
      <section class="bg-light py-10">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-6">
                      <div class="text-center">
                          <div class="text-xs text-uppercase-expanded text-primary mb-2">What We Can Do For You</div>
                          <h2 class="mb-5">Building or enhancing your web presence doesn't have to be a hassle.</h2>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-lg-4 col-md-6 mb-5" data-aos="fade-up">
                      <a class="card text-center text-decoration-none h-100 lift" href="#!"
                          ><div class="card-body py-5">
                              <div class="icon-stack icon-stack-lg bg-green-soft text-green mb-4"><Icon.Layout /></div>
                              <h5>Web</h5>
                              <p class="card-text small">We can build, optimize, and secure your site whether WordPress, Squarespace, or anything else.</p>
                          </div></a>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-5" data-aos="fade-up" data-aos-delay="100">
                      <a class="card text-center text-decoration-none h-100 lift" href="#!"
                          ><div class="card-body py-5">
                              <div class="icon-stack icon-stack-lg bg-red-soft text-red mb-4"><Icon.Server /></div>
                              <h5>Hosting</h5>
                              <p class="card-text small">Offering Personal, Professional, and Business packages we provide you with a quality hosting experience unmatched elsewhere online.</p>
                          </div></a>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-5" data-aos="fade-up" data-aos-delay="150">
                      <a class="card text-center text-decoration-none h-100 lift" href="#!"
                          ><div class="card-body py-5">
                              <div class="icon-stack icon-stack-lg bg-yellow-soft text-yellow mb-4"><Icon.Smartphone /></div>
                              <h5>Software</h5>
                              <p class="card-text small">Need a completely custom app to solve a particularly thorny issue? We've got you covered.</p>
                          </div></a>
                      </div>
                  <div class="col-lg-4 col-md-6 mb-5 mb-lg-0" data-aos="fade-up">
                      <a class="card text-center text-decoration-none h-100 lift" href="#!"
                          ><div class="card-body py-5">
                              <div class="icon-stack icon-stack-lg bg-purple-soft text-purple mb-4"><Icon.MapPin /></div>
                              <h5>SEO & Marketing</h5>
                              <p class="card-text small">Leveraging analytics and keywords to your advantage has never been easier.</p>
                          </div></a>
                      </div>
                  <div class="col-lg-4 col-md-6 mb-5 mb-md-0" data-aos="fade-up" data-aos-delay="100">
                      <a class="card text-center text-decoration-none h-100 lift" href="#!"
                          ><div class="card-body py-5">
                              <div class="icon-stack icon-stack-lg bg-blue-soft text-blue mb-4"><Icon.Lock /></div>
                              <h5>Security</h5>
                              <p class="card-text small">Everything we create or optimize, by default, is as secure as possible.</p>
                          </div></a>
                      </div>
                  <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="150">
                      <a class="card text-center text-decoration-none h-100 lift" href="#!"
                          ><div class="card-body py-5">
                              <div class="icon-stack icon-stack-lg bg-orange-soft text-orange mb-4"><Icon.Users /></div>
                              <h5>Workshops</h5>
                              <p class="card-text small">We also teach individuals, groups, and teams what we know!</p>
                          </div></a>
                      </div>
              </div>
          </div>
      </section>
  <section class="bg-light py-10">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-lg-8">
                  <div class="text-center mb-10">
                      <h2>Why Choose Totality Works?</h2>
                      <p class="lead">We offer solutions for businesses of all sizes and for almost all of your needs. If we can find a way to make an app to scratch your back, we will.</p>
                  </div>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-4 text-center mb-5">
                  <div class="display-1 font-weight-bold text-gray-400">10+</div>
                  <div class="h5">Years of Experience</div>
                  <p>Our team has built powerful, highly customized solutions for business in Dallas-Fort Worth and Northeast Texas for over a decade.</p>
              </div>
              <div class="col-lg-4 text-center mb-5">
                  <div class="display-1 font-weight-bold text-gray-400">50+</div>
                  <div class="h5">Pre-Built Website Templates</div>
                  <p>For businesses that are on a budget and need online presence quick, we provide a selection of HTML and WordPress templates to jumpstart the process.</p>
              </div>
              <div class="col-lg-4 text-center mb-5">
                  <div class="display-1 font-weight-bold text-gray-400">100%</div>
                  <div class="h5">Customer Satisfaction</div>
                  <p>Building the perfect solution for you and your customers is our only objective. No fluff, no hassle, no hidden prices or fees.</p>
              </div>
          </div>
          <div class="text-center"><a class="btn btn-marketing btn-primary rounded-pill lift lift-sm" href="services.html">Check Out Our Services</a></div>
      </div>
      <div class="svg-border-rounded text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
      </div>
  </section>
  <section class="bg-white py-10">
      <div class="container">
          <div class="row">
              <div class="col-lg-6 mb-5 mb-lg-0 divider-right">
                  <div class="testimonial p-lg-5">
                      <div class="avatar avatar-xl mb-3"><img class="avatar-img" src="https://source.unsplash.com/MTZTGvDsHFY/96x96" /></div>
                      <div class="mb-3 text-yellow"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                      <p class="testimonial-quote text-primary">"I was impressed with how beautiful and clean this property was. The owner definitely goes the extra mile to help their guests!"</p>
                      <div class="testimonial-name">Adam Hall</div>
                      <div class="testimonial-position">Lisbon, Portugal</div>
                  </div>
              </div>
              <div class="col-lg-6">
                  <div class="testimonial p-lg-5">
                      <div class="avatar avatar-xl mb-3"><img class="avatar-img" src="https://source.unsplash.com/QAB-WJcbgJk/96x96" /></div>
                      <div class="mb-3 text-yellow"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                      <p class="testimonial-quote text-primary">"Amazing location, convenient parking, and a lots of amenities and extras. I will definitely be returning here whenever I'm in town."</p>
                      <div class="testimonial-name">Lia Peterson</div>
                      <div class="testimonial-position">Sacramento, CA, USA</div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
