const server = Bun.serve({
    port:5000,
    fetch(req){
    return new Response("Hello World!")
    },
});

var v = Bun.version

console.log(`listening on http://localhost:${server.port}`);
console.log(v);

