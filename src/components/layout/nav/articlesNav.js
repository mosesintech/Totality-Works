import React from 'react'
import { Link } from 'gatsby'

const ArticlesNav = (props) => {
    const articles = props.menu.node;
    return (
        <>
            <li className="nav-item dropdown dropdown-md no-caret">
                <Link 
                    className="nav-link dropdown-toggle" 
                    id="navbarDropdownPages" 
                    role="button" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false" 
                    to={``}>
                        {articles.label}
                        <i className="fas fa-chevron-right dropdown-arrow"></i>
                </Link>
                <div className="dropdown-menu dropdown-menu-right animated--fade-in-up" aria-labelledby="navbarDropdownPages">
                    <div className="row no-gutters">
                        <div className="col-sm p-lg-3">
                            <h6 className="dropdown-header text-primary">Categories</h6>
                            {articles.childItems.edges.map(item => {
                                const url = item.node.label.toLowerCase().replace(' ', '-');
                                return (
                                    <>
                                    <Link 
                                        className="dropdown-item" 
                                        to={`/categories/${url}`}>
                                            {item.node.label}
                                    </Link>
                                    </>
                                )
                            })}
                            <div className="dropdown-divider border-0 d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default ArticlesNav