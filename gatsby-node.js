const path = require('path')
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const ArticleTemplate = path.resolve('./src/templates/Article.js')
    const CategoriesTemplate = path.resolve('./src/templates/Categories.js')
    const PageTemplate = path.resolve('./src/templates/Page.js')
    const result = await graphql(`
    query {
        wpgraphql{
            posts(first: 10000) {
                nodes {
                    id
                    slug
                }
            }
            pages(first: 1000) {
                nodes {
                    id
                    slug
                }
            }
            categories(first: 10000) {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    }
    `)
    if(result.errors){
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    const Pages = result.data.wpgraphql.pages.nodes
    Pages.forEach(page => {
        createPage({
            path: `/${page.slug}`,
            component: PageTemplate,
            context: {
                id: page.id,
            },
        })
    })
    const Articles = result.data.wpgraphql.posts.nodes
    Articles.forEach(article => {
        createPage({
            path: `/articles/${article.slug}`,
            component: ArticleTemplate,
            context: {
                id: article.id,
            },
        })
    })
    const Categories = result.data.wpgraphql.categories.edges
    Categories.forEach(cat => {
        createPage({
            path: `/categories/${cat.node.slug}`,
            component: CategoriesTemplate,
            context: {
                id: cat.node.id,
            },
        })
    })
}