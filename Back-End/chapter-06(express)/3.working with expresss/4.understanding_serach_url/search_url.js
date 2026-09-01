// what is search URL?

// http://localhost:3000/search?query=house&location=delhi


// Parts of a Search URL

1)path or Route / endpoint

"/search"
// it is the path or Route or  endpoint
// it is used to identify the resource on the server
// it is mandatory
// it is accessible in req.path or req.route object

2)Query-string
?query=house&location=delhi->it is the query-string
// it contains key-value pairs separated by &
// key and value are separated by =
// it is used to send additional data to the server
// it is optional
// it is accessible in req.query object

3)path parameters
// it is used to send data to make the URl Dynamic
// it is defined in the route using colon(:) before the parameter name
// it is accessible in req.params object
//example: http://localhost:3000/search/johan
// here "johan" is a path parameter

