import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const PageTemplate = ({ data }) => {
    const page = data.wpgraphql.page
    return (
        <Layout>
            <SEO title={page.title} />
            <h1>{page.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </Layout>
    )
}

export default PageTemplate

export const query = graphql`
    query($id: ID!) {
        wpgraphql {
            page(id: $id) {
                title
                content
            }
        }
    }
`