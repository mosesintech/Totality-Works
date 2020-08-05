import React from 'react'
import { graphql } from 'gatsby'
import Default from '../components/pages/default'
import Articles from '../components/pages/articles'

const PageTemplate = ({ data }) => {
    const page = data.wpgraphql.page
    const { title } = data.wpgraphql.page;
    switch (title) {
        case 'Articles':
          return <Articles {...page} />
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
            }
        }
    }
`