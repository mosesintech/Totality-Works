import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layout/layout'
import SEO from '../seo'

const Services = ({ title, content, ServicesContent }) => {
    const {
        servicesOffered, 
        statsHeader, 
        statsText, 
        stats, 
        statCtaButtonText, 
        statCtaButtonLink
    } = ServicesContent
    return (
        <Layout>
            <SEO title={title} />
            <header class="page-header page-header-dark bg-gradient-primary-to-secondary">
                <div class="page-header-content pt-10">
                    <div class="container text-center">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <h1 class="page-header-title mb-3">{title}</h1>
                                <p class="page-header-text" dangerouslySetInnerHTML={{ __html: content }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="svg-border-rounded text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
                </div>
            </header>
            <section class="bg-white py-10">
                <div class="container">
                    {servicesOffered.map(service => {
                        return (
                            <div class="row">
                                <h2 style={{marginBottom: '2%'}}>{service.serviceName}</h2>
                                <span style={{ display: "flex", justifyContent: 'space-between' }} >
                                    <Link to="/contact" style={{width: '60%'}}><img src={service.serviceImage.sourceUrl} alt={service.serviceImage.altText} class={`align${service.serviceImage.imageAlignment}`} style={{width: '90%'}} /></Link>
                                    <p style={{width: '100%'}}>{service.serviceDescription}</p>
                                </span>
                                <hr class="my-5"/>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section class="bg-light py-10">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-8">
                      <div class="text-center mb-10">
                          <h2>{statsHeader}</h2>
                          <p class="lead">{statsText}</p>
                      </div>
                  </div>
              </div>
              <div class="row">
                {stats.map(stat => {
                  return (
                  <div class="col-lg-4 text-center mb-5">
                      <div class="display-1 font-weight-bold text-gray-400">{stat.number}</div>
                      <div class="h5">{stat.header}</div>
                      <p>{stat.text}</p>
                  </div>
                  )
                })}
              </div>
              <div class="text-center">
                <Link class="btn btn-marketing btn-primary rounded-pill lift lift-sm" to={`${statCtaButtonLink}`}>{statCtaButtonText}</Link>
              </div>
          </div>
          <div class="svg-border-rounded text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
          </div>
      </section>
        </Layout>
    )
}

export default Services