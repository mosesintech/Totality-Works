import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layout/layout'
import SEO from '../seo'

const Articles = ({ title, content, edges }) => {
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
                <ul style={{ listStyle: "none" }}>
                  {edges.map(post => (
                    <li style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}>
                      <Link to={`/articles/${post.node.slug}`} style={{ display: "flex", color: "black", textDecoration: "none" }} >
                        <img src={post.node.author.node.avatar.url} alt={post.node.author.node.name} style={{ width: "25%", marginRight: 20 }} />
                        <div style={{ width: "75%" }}>
                            <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} style={{ marginBottom: 0 }} />
                            <p style={{ margin: 0, color: "grey" }}>
                                Written by {post.node.author.node.name} on {post.node.date.split("T").shift()}
                            </p>
                            <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                </div>
            </section>
        </Layout>
    )
}

export default Articles