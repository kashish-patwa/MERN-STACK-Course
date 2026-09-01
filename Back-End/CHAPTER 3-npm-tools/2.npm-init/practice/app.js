 let http = require("http")

let server = http.createServer((req,res)=>{

})
let port=675
server.listen(port,()=>{
console.log( `server at listing port${port}`)
})