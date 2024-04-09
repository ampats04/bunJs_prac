import { Elysia, t } from "elysia";

var count = 0
const app = new Elysia()
    .group("/search", (app) => {
        return app.guard({ 
                    query: t.Object({
                        q: t.String()
                    }),  
            }, 
            (app) => 
                app   
            .get('/',({query}) => `query ${query?.q}`)
            .get('/movie', ({query}) => `query: ${query?.q}`)
            .get('/book', ({query}) => `query: ${query?.q}`))
        
    })
    .group("search/:id", (app)=>{
        return app
        .get("/", ({params}) => `id: ${params.id}`)
        .get("/movie", ({params}) => `id: ${params.id}`)
        .get("/book", ({params}) => `id: ${params.id}`)
    })
    .listen(3000)

console.log(`Elysia is running at http://${app.server?.hostname}:${app.server?.port}`)
console.log(Bun.version)

