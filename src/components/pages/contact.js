import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../layout/layout'
import SEO from '../seo'
import ContactForm from '../contactForm'

const Contact = ({ title, content }) => {
    
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
            <section class="py-10">
                <div class="container">
                    {/* <div class="row mb-5">
                        <div class="col-lg-4 mb-5">
                            <Link class="card card-link border-top border-top-lg border-primary lift text-center o-visible h-100" href="#!">
                                <div class="card-body">
                                    <div class="icon-stack icon-stack-xl bg-primary-soft text-primary mb-4 mt-n5 z-1 shadow"><i data-feather="user"></i></div>
                                    <h5>Sales</h5>
                                    <p class="card-text">Ready to open an account? Have questions about purchasing a product?</p>
                                </div>
                                <div class="card-footer">
                                    <div class="text-primary font-weight-bold d-inline-flex align-items-center">Contact Sales<i class="fas fa-arrow-right text-xs ml-1"></i></div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-lg-4 mb-5">
                            <Link class="card card-link border-top border-top-lg border-primary lift text-center o-visible h-100" href="#!">
                                <div class="card-body">
                                    <div class="icon-stack icon-stack-xl bg-primary-soft text-primary mb-4 mt-n5 z-1 shadow"><i data-feather="user"></i></div>
                                    <h5>Sales</h5>
                                    <p class="card-text">Ready to open an account? Have questions about purchasing a product?</p>
                                </div>
                                <div class="card-footer">
                                    <div class="text-primary font-weight-bold d-inline-flex align-items-center">Contact Sales<i class="fas fa-arrow-right text-xs ml-1"></i></div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-lg-4 mb-5">
                            <Link class="card card-link border-top border-top-lg border-primary lift text-center o-visible h-100" href="#!">
                                <div class="card-body">
                                    <div class="icon-stack icon-stack-xl bg-primary-soft text-primary mb-4 mt-n5 z-1 shadow"><i data-feather="user"></i></div>
                                    <h5>Sales</h5>
                                    <p class="card-text">Ready to open an account? Have questions about purchasing a product?</p>
                                </div>
                                <div class="card-footer">
                                    <div class="text-primary font-weight-bold d-inline-flex align-items-center">Contact Sales<i class="fas fa-arrow-right text-xs ml-1"></i></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="row justify-content-center text-center">
                        <div class="col-lg-5 mb-5 mb-lg-0">
                            <h5>Join us on Slack!</h5>
                            <p class="font-weight-light mb-0">Join the discussion on Slack. Our community can help answer questions!</p>
                        </div>
                        <div class="col-lg-5">
                            <h5>General Support</h5>
                            <p class="font-weight-light mb-0">For any other support questions, please send us an email at <a href="#!">info@totalityworks.com</a></p>
                        </div>
                    </div>
                    <hr class="my-10" /> */}
                    {/* <div class="row justify-content-center">
                        <div class="col-lg-8 text-center">
                            <h2>Can't find the answer you need?</h2>
                            <p class="lead mb-5">Contact us and we'll get back to you as soon as possible with a solution to whatever issues you're having.</p>
                        </div>
                    </div> */}
                    <div class="row align-items-center mb-10">
                        <div class="col-lg-4 text-center mb-5 mb-lg-0">
                            {/* <div class="section-preheading">Message Us</div>
                            <a href="#!">Start a chat!</a> */}
                        </div>
                        <div class="col-lg-4 text-center mb-5 mb-lg-0">
                            <div class="section-preheading">Call Anytime</div>
                            <a href="#!">(214)-868-0625</a>
                        </div>
                        <div class="col-lg-4 text-center">
                            {/* <div class="section-preheading">Email Us</div>
                            <a href="#!">info@totalityworks.com</a> */}
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </section>
        </Layout>
    )
}

export default Contact