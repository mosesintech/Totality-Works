import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layout/layout'
import SEO from '../seo'

const Portfolio = (props) => {
    const { title, content, PortfolioContent } = props;
    return (
        <Layout>
            <SEO title={title} />
            <header className="page-header page-header-dark bg-gradient-primary-to-secondary">
                <div className="page-header-content pt-10">
                    <div className="container text-center">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <h1 className="page-header-title mb-3">{title}</h1>
                                <p className="page-header-text" dangerouslySetInnerHTML={{__html: content}} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="svg-border-rounded text-light">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
                </div>
            </header>
            <section className="bg-light pb-10">
                <div className="container">
                    <div className="row">
                        {PortfolioContent.pieces.map(piece => {
                            return (
                            <div className="col-md-6 col-xl-4 mb-5 mt-n5">
                                <a className="card card-portfolio h-100" href={`${piece.link}`} target="_blank" rel="noreferrer noopener">
                                    <img className="card-img-top" src={`${piece.screenshot.sourceUrl}`} alt={`${piece.screenshot.altText}`} />
                                    <div className="card-body"><div className="card-title">{piece.title}</div></div>
                                </a>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className="bg-white py-10">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-10 text-center py-5">
                            <h2>{PortfolioContent.ctaTitle}</h2>
                            <p className="lead text-gray-500 mb-5">{PortfolioContent.ctaText}</p>
                            <Link className="btn btn-primary btn-marketing rounded-pill" to={`${PortfolioContent.ctaButtonLink}`}>{PortfolioContent.ctaButtonText}</Link>
                        </div>
                    </div>
                </div>
                <div className="svg-border-rounded text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
                </div>
            </section>
        </Layout>
    )
}

export default Portfolio