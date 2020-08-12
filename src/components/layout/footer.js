import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
    return (<>
        <div id="layoutDefault_footer">
            <footer class="footer pt-10 pb-5 mt-auto bg-white footer-light">
                <div class="container">
                    {/* <div class="row">
                        <div class="col-lg-3">
                            <div class="footer-brand">Totality Works</div>
                            <div class="mb-3">What you need, we have.</div>
                            <div class="icon-list-social mb-5">
                                <a class="icon-list-social-link" href="/"><i class="fab fa-youtube" aria-label="Youtube"></i></a><a class="icon-list-social-link" href="/"><i class="fab fa-instagram" aria-label="Instagram"></i></a><a class="icon-list-social-link" href="/"><i class="fab fa-facebook" aria-label="Facebook"></i></a><a class="icon-list-social-link" href="/"><i class="fab fa-github" aria-label="Github"></i></a><a class="icon-list-social-link" href="/"><i class="fab fa-twitter" aria-label="Twitter"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <div class="row">
                                <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                                    <div class="text-uppercase-expanded text-xs mb-4">Services</div>
                                    <ul class="list-unstyled mb-0">
                                        <li class="mb-2"><a href="/">Web</a></li>
                                        <li class="mb-2"><a href="/">Hosting</a></li>
                                        <li class="mb-2"><a href="/">Software</a></li>
                                        <li class="mb-2"><a href="/">Workshops</a></li>
                                    </ul>
                                </div>
                                <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                                    <div class="text-uppercase-expanded text-xs mb-4">Content</div>
                                    <ul class="list-unstyled mb-0">
                                        <li class="mb-2"><a href="/">Blog</a></li>
                                        <li class="mb-2"><a href="/">Videos</a></li>
                                        <li class="mb-2"><a href="/">Podcast</a></li>
                                        <li><a href="/">Tutorials</a></li>
                                    </ul>
                                </div>
                                <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
                                    <div class="text-uppercase-expanded text-xs mb-4">Support</div>
                                    <ul class="list-unstyled mb-0">
                                        <li class="mb-2"><a href="/">Hosting</a></li>
                                        <li class="mb-2"><a href="/">WordPress</a></li>
                                        <li class="mb-2"><a href="/">Knowledgebase</a></li>
                                        <li class="mb-2"><a href="/">Ticket System</a></li>
                                    </ul>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <div class="text-uppercase-expanded text-xs mb-4">Contact</div>
                                    <ul class="list-unstyled mb-0">
                                        <li class="mb-2"><a href="/">Careers</a></li>
                                        <li class="mb-2"><a href="/">(214)-868-0625</a></li>
                                        <li><a href="/">info@totalityworks.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <hr class="my-5" />
                    <div class="row align-items-center">
                        <div class="col-md-6 small">Copyright &copy; <Link to={`/`}>Totality Works</Link> 2020</div>
                        <div class="col-md-6 text-md-right small">
                            <p>(214)-868-0625 <address>608 E Hickory St #128, Denton, TX 76205</address></p>
                            {/* <a href="/">Privacy Policy</a>
                            &middot;
                            <a href="/">Terms &amp; Conditions</a> */}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </>)
}

export default Footer