const path = require('path')
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const PageTemplate = path.resolve('./src/templates/Page.js')
    const result = await graphql(`
    query {
        wpgraphql{
            pages(first: 100) {
                nodes {
                    id
                    slug
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
}