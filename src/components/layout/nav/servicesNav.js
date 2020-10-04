import React from 'react'
import { Link } from 'gatsby'

const ServicesNav = (props, { location }) => {
    const services = props.menu.node;
    return (
        <>
            <li className="nav-item dropdown dropdown-xl no-caret">
                <Link 
                    id="navbarDropdownDemos" 
                    role="button" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false" 
                    to={``}
                    className="nav-link dropdown-toggle" >
                        {services.label}
                        <i className="fas fa-chevron-right dropdown-arrow"></i>
                </Link>
                <div className="dropdown-menu dropdown-menu-right animated--fade-in-up mr-lg-n15" aria-labelledby="navbarDropdownDemos">
                    <div className="row no-gutters">
                        <div className="col-lg-5 p-lg-3 bg-img-cover overlay overlay-primary overlay-70 d-none d-lg-block" style={{backgroundImage: `url("https://source.unsplash.com/mqO0Rf-PUMs/500x350")`}}>
                            <div className="d-flex h-100 w-100 align-items-center justify-content-center">
                                <div className="text-white text-center z-1">
                                    <div className="mb-3">What You Need, We Have</div>
                                    <Link className="btn btn-white btn-sm text-primary rounded-pill" to={`/${services.label.toLowerCase()}`}>View All</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 p-lg-5">
                            <div className="row">
                                <div className="col-lg-6">
                                    {services.childItems.edges.map(item => {
                                        const url = item.node.label.toLowerCase().replace(' ', '-');
                                        return (
                                            <>
                                            <Link 
                                                to={`/${url}`}
                                            >
                                                <h6 className="dropdown-header text-primary">
                                                    {item.node.label}
                                                </h6>
                                            </Link>
                                            {item.node.childItems.edges.map(child => {
                                                return (
                                                <Link 
                                                    className="dropdown-item" 
                                                    to={`/${url}/${child.node.label.toLowerCase().replace(' ', '-')}`}
                                                >
                                                    {child.node.label}
                                                </Link>
                                                )
                                            })}
                                            </>
                                        )
                                    })}
                                    <div className="dropdown-divider border-0"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default ServicesNav