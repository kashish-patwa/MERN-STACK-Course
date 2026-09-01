//  Data sent by the client can be accessed using req.params, req.query, req.body, req.headers, and req.cookies depending on how the data is sent.

// 1) Route Params (URL path) → req.params
// Used when data is part of the URL path

app.get("/user/:id", (req, res) => {
    console.log(req.params.id);
});

//👉 URL: /user/101 → Output: 101



// 2) Query String → req.query
// Used for filters, search, etc.

// /search?name=shahid&age=21
console.log(req.query.name); // shahid



// 3) Request Body (Form Data / JSON) → req.body
// Used when client sends data (POST, PUT)

app.post("/submit", (req, res) => {
    console.log(req.body);
});

// 👉 Requires middleware like:

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// 4) Headers → req.headers
// Extra info sent with request

console.log(req.headers["content-type"]);

// 5) Cookies → req.cookies
// Stored in browser (requires middleware)

// need cookie-parser
console.log(req.cookies);