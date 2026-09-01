let http= require("http")
let server =  http.createServer((req,res)=>{
    if(req.url=="/"){(
        res.setHeader("content-type","text/html"))
        res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Myntra Style Navbar</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
        }

        /* Navbar */
        .navbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: white;
            padding: 10px 40px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        /* Logo */
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #ff3f6c;
        }

        /* Nav Links */
        .nav-links {
            display: flex;
            gap: 30px;
        }

        .nav-links a {
            text-decoration: none;
            color: black;
            font-weight: 600;
            position: relative;
        }

        .nav-links a:hover {
            color: #ff3f6c;
        }

        /* Cart */
        .cart {
            font-weight: bold;
        }

        .cart a {
            text-decoration: none;
            color: black;
        }

        .cart a:hover {
            color: #ff3f6c;
        }
    </style>
</head>
<body>

    <nav class="navbar">
        <!-- Logo -->
        <div class="logo">MYNTRA</div>

        <!-- Navigation Links -->
        <div class="nav-links">
            <a href="/home">Home</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
        </div>

        <!-- Cart -->
        <div class="cart">
            <a href="#">Cart 🛒</a>
        </div>
    </nav>

</body>
</html>`)

res.end()
    }

    else if(req.url=="/home"){
        res.setHeader("content-type","text/html")
        res.write("welcome to home page")
        res.end()
    }

    else if(req.url=="/men"){
        res.setHeader("content-type","text/html")
        res.write("welcome to men page")
        res.end()
    }
    else if(req.url=="/women"){
        res.setHeader("content-type","text/html")
        res.write("welcome to women page")
        res.end()
    }

    else if(req.url=="/kids"){
        res.setHeader("content-type","text/html")
        res.write("welcome to kids page")
        res.end()
    }
})
 let port=8000
server.listen(port,()=>{
    console.log(`server is listing at http//localhost:${port}`)
} )


