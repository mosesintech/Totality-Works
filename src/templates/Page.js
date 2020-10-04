import React from 'react'
import { graphql } from 'gatsby'
import Default from '../components/pages/default'
import Articles from '../components/pages/articles'
import Services from '../components/pages/services'
import Portfolio from '../components/pages/portfolio'
import Contact from '../components/pages/contact'

const PageTemplate = ({ data }) => {
    const page = data.wpgraphql.page
    const posts = data.wpgraphql.posts
    const { title } = data.wpgraphql.page;
    switch (title) {
        case 'Articles':
          return <Articles {...page} {...posts} />
        case 'Services':
          return <Services {...page} />
        case 'Contact':
          return <Contact {...page} />
        case 'Portfolio':
            return <Portfolio {...page}/>
        default:
          return <Default {...page} />
    }
}

export default PageTemplate

export const query = graphql`
    query($id: ID!) {
        wpgraphql {
            page(id: $id) {
                title
                content
                aboutByline {
                    aboutByline
                }
                PortfolioContent {
                    pieces {
                        title
                        link
                        screenshot {
                            sourceUrl
                            altText
                        }
                    }
                    ctaTitle
                    ctaText
                    ctaButtonText
                    ctaButtonLink
                }
                ServicesContent {
                    servicesOffered {
                        serviceName
                        serviceDescription
                        serviceImage {
                            sourceUrl
                            altText
                        }
                        imageAlignment
                    }
                    statsHeader
                    statsText
                    stats {
                        header
                        number
                        text
                    }
                    statCtaButtonText
                    statCtaButtonLink
                    }
            }
            posts {
                edges {
                    node {
                        title
                        excerpt
                        slug
                        date
                        categories {
                            edges {
                                node {
                                    name
                                    slug
                                }
                            }
                        }
                        author {
                            node {
                                name
                                nickname
                                avatar(size: 150) {
                                   url
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`