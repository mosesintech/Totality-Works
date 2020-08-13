import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
    const cats = data.wpgraphql.categories.edges
  return (
  <Layout>
    <SEO title="Categories" />
        <header class="page-header page-header-dark bg-gradient-primary-to-secondary">
        <div class="page-header-content pt-10">
            <div class="container text-center">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <h1 class="page-header-title mb-3">Categories</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="svg-border-rounded text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
        </div>
    </header>
      <section class="bg-light py-10">
          <div class="container">
              <div class="row">
                {cats.map(cat => {
                  return (
                  <div class="col-lg-4 col-md-6 mb-5" data-aos="fade-up">
                      <Link class="card text-center text-decoration-none h-100 lift" to={`${cat.node.slug}`}>
                        <div class="card-body py-5">
                            <h5>{cat.node.name}</h5>
                            <p class="card-text small">{cat.node.description}</p>
                        </div>
                      </Link>
                  </div>
                  )
                })}
              </div>
          </div>
      </section>
  </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    wpgraphql{
        categories(first: 10000) {
            edges {
                node {
                    id
                    slug
                    name
                    description
                }
            }
        }
    }
  }
`;