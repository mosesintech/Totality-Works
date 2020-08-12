import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import SocialShare from '../components/social'

const ArticleTemplate = ({ data }) => {
    const { title, date, slug, content, subtitle, categories, featuredImage } = data.wpgraphql.post;
    return (
        <Layout>
            <SEO title={title} />
            <header class="page-header page-header-dark bg-gradient-primary-to-secondary">
                <div class="page-header-content pt-10">
                    <div class="container text-center">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <h1 class="page-header-title mb-3">{title}</h1>
                                <p class="page-header-text">{subtitle.subtitle}</p>
                                {categories.nodes.map(cat => {
                                    return (
                                        <Link to={`/categories/${cat.slug}`} class="btn btn-link btn-marketing">{cat.name}</Link>
                                    )
                                })}
                                <br />
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
                    <img src={featuredImage.node.sourceUrl} alt={featuredImage.node.altText} class="aligncenter" style={{width: '100%', marginBottom: '2%'}} />
                    <p>Last updated on <Link to={`/`} class="page-header-text">{date.split("T").shift()}</Link></p>
                    <SocialShare slug={slug} title={title} />
                    <article dangerouslySetInnerHTML={{ __html: content }} />
                    <SocialShare slug={slug} title={title} />
                </div>
            </section>
        </Layout>
    )
}

export default ArticleTemplate

export const query = graphql`
    query($id: ID!) {
        wpgraphql {
            post(id: $id) {
                title
                date
                slug
                content
                subtitle {
                    subtitle
                }
                categories {
                    nodes {
                        name
                        slug
                    }
                }
                featuredImage {
                    node {
                        sourceUrl
                        altText
                    }
                }
            }
        }
    }
`