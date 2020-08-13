import React from 'react'
import { graphql } from 'gatsby'
import Default from '../components/pages/default'
import Articles from '../components/pages/articles'
import Services from '../components/pages/services'

const PageTemplate = ({ data }) => {
    const page = data.wpgraphql.page
    const posts = data.wpgraphql.posts
    const { title } = data.wpgraphql.page;
    switch (title) {
        case 'Articles':
          return <Articles {...page} {...posts} />
        case 'Services':
          return <Services {...page} />
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
            }
            posts {
                edges {
                    node {
                        title
                        excerpt
                        slug
                        date
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