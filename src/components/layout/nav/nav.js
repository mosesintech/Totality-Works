import React from 'react'
import { Link } from 'gatsby'
import ServicesNav from './servicesNav'
import ArticlesNav from './articlesNav'

const Nav = (props) => {
    return (
        <>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-lg-5">
                <li className="nav-item"><Link className="nav-link" to={`/`}>Home</Link></li>
                {props.menu.edges.map(item => {
                    if(!item.node.parentId) {
                        if(!item.node.label.toLowerCase().includes('contact')){
                            if(item.node.label.toLowerCase().includes('services')) {
                                return <ServicesNav menu={item}/>
                            }
                            if(item.node.label.toLowerCase().includes('articles')) {
                                return <ArticlesNav menu={item}/>
                            }
                            return <li className="nav-item"><Link className="nav-link" to={`/${item.node.label.toLowerCase()}`}>{item.node.label}</Link></li>
                        }
                        else {
                            return <></>
                        }
                    } else {
                        return <></>
                    }
                })}
                <li><Link className="btn-teal btn rounded-pill px-4 ml-lg-4" to={`/contact`}>contact us<i className="fas fa-arrow-right ml-1"></i></Link></li>
            </ul>
        </div>
        </>
    )
}

export default Nav