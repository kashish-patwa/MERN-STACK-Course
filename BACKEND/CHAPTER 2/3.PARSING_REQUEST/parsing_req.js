let http=require("http")
let server=http.createServer((req,res)=>{
  if(req.url=="/"){ 
    res.write(`              <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <h1>Welcome to your Home page</h1>
        <form action="/submit-details" method="post">
          <label for="name">name</label>
          <input type="text" id="name" name="userName" placeholder="enter you name">
          <label for="gender">Gender:</label>
          <label for="male">male</label>
          <input type="radio" id="male" name="gender" value="male">
          <label for="female">female</label>
          <input type="radio" id="female" name="gender" value="female">
          <button type="submit">submit</button>
        </form>
      </body>
      </html>
`)
 res.end()
                 

  }
})
let port=3000
server.listen(port,()=>{
    console.log(`server is listeing at http //loicalhost:${port}`)
    
})
