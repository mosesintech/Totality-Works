import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { header, 
    text, 
    ctaButtonText, 
    ctaButtonUrl, 
    altCtaText, 
    altCtaUrl, 
    featuredImage,
    quickPitches,
    servicesHeader,
    servicesText,
    services,
    statsHeader,
    statsText,
    stat,
    statCtaButtonText,
    statCtaButtonUrl,
    // testimonial 
    } = data.wpgraphql.page.HomeContent;

  return (
  <Layout>
    <SEO title="Home" />
      <header className="page-header page-header-dark bg-gradient-primary-to-secondary">
        <div className="page-header-content pt-10">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h1 className="page-header-title">{header}</h1>
                        <p className="page-header-text mb-5">{text}</p>
                        <Link className="btn btn-teal btn-marketing rounded-pill lift lift-sm" to={ctaButtonUrl}>{ctaButtonText}<i className="fas fa-arrow-right ml-1"></i></Link>
                        <Link className="btn btn-link btn-marketing" to={altCtaUrl}>{altCtaText}</Link>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block" data-aos="fade-up" data-aos-delay="50"><img className="img-fluid" alt={featuredImage.altText} src={featuredImage.sourceUrl} /></div>
                </div>
            </div>
        </div>
        <div className="svg-border-rounded text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
        </div>
      </header>
      <section className="bg-white py-10">
        <div className="container">
            <div className="row text-center">
              {quickPitches.map(pitch => {
                return (
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <div className="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4"><i className={`fas fa-${pitch.pitchIcon}`}></i></div>
                    <h3>{pitch.pitchHeader}</h3>
                    <p className="mb-0">{pitch.pitchText}</p>
                </div>
                )
              })}
            </div>
        </div>
      </section>
      <section className="bg-light py-10">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-6">
                      <div className="text-center">
                          <div className="text-xs text-uppercase-expanded text-primary mb-2">{servicesHeader}</div>
                          <h2 className="mb-5">{servicesText}</h2>
                      </div>
                  </div>
              </div>
              <div className="row">
                {services.map(service => {
                  return (
                  <div className="col-lg-4 col-md-6 mb-5" data-aos="fade-up">
                      <Link className="card text-center text-decoration-none h-100 lift" to={`${service.serviceLink}`}>
                        <div className="card-body py-5">
                            <div className={`icon-stack icon-stack-lg bg-${service.serviceIconColor}-soft text-${service.serviceIconColor} mb-4`}>
                              <i className={`fas fa-${service.serviceIcon}`}></i>
                            </div>
                            <h5>{service.serviceHeader}</h5>
                            <p className="card-text small">{service.serviceText}</p>
                        </div>
                      </Link>
                  </div>
                  )
                })}
              </div>
          </div>
      </section>
      <section className="bg-light py-10">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-8">
                      <div className="text-center mb-10">
                          <h2>{statsHeader}</h2>
                          <p className="lead">{statsText}</p>
                      </div>
                  </div>
              </div>
              <div className="row">
                {stat.map(stat => {
                  return (
                  <div className="col-lg-4 text-center mb-5">
                      <div className="display-1 font-weight-bold text-gray-400">{stat.number}</div>
                      <div className="h5">{stat.header}</div>
                      <p>{stat.text}</p>
                  </div>
                  )
                })}
              </div>
              <div className="text-center">
                <Link className="btn btn-marketing btn-primary rounded-pill lift lift-sm" to={`${statCtaButtonUrl}`}>{statCtaButtonText}</Link>
              </div>
          </div>
          <div className="svg-border-rounded text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
          </div>
      </section>
      {/* <section className="bg-white py-10">
          <div className="container">
              <div className="row">
                {testimonial.map(client => {
                  return (
                  <div className="col-lg-6 mb-5 mb-lg-0">
                      <div className="testimonial p-lg-5">
                          <div className="avatar avatar-xl mb-3"><img className="avatar-img" src={client.clientImage.sourceUrl} alt="person" /></div>
                          <div className="mb-3 text-yellow">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <p className="testimonial-quote text-primary">{client.clientTestimonial}</p>
                          <div className="testimonial-name">{client.clientName}</div>
                          <div className="testimonial-position"><Link to={client.clientWebsite}>{client.clientWebsite}</Link></div>
                      </div>
                  </div>
                  )
                })}
              </div>
          </div>
        </section> */}
  </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    wpgraphql{
      page(id: "cG9zdDoxMA==") {
        HomeContent {
          header
          text
          ctaButtonText
          ctaButtonUrl
          altCtaText
      		altCtaUrl
          featuredImage {
            altText
            sourceUrl
          }
          quickPitches {
            pitchHeader
            pitchIcon
            pitchText
          }
          servicesHeader
          servicesText
          services {
            serviceHeader
            serviceIcon
            serviceText
            serviceIconColor
            serviceLink
          }
          statsHeader
          statsText
          stat {
            number
            header
            text
          }
          statCtaButtonText
          statCtaButtonUrl
          testimonial {
            clientName
            clientTestimonial
            clientWebsite
            clientImage {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;