// what is api

// before understanding a api let's first understand a fucntion call


// 1. Function Call

// A function call happens inside the same program.
//that means function call main hum same application main defined kiye gaye fucntion ko hum execute(run) karte hain

// Example:

function add(a, b) {
    return a + b;
}

let result = add(10, 20);
console.log(result);

// When you write:

add(10, 20);

// the CPU directly jumps to the add function in the same application, executes it, and returns the result.

        add()
          |
          └──> returns 30

//No internet, no network, no server involved.




// 2) API = Application Programming Interface

// jabhi company koi application build karti hain toh,then company implements its Diffrent services and functionality on its
// backend servers using functions

// When the company wants other applications to use some of
// these services, it does not expose its entire internal
// implementation.

// Instead, it exposes a public interface through API endpoints
// (URLs and routes or addres of these fucntion

//exposing of these servicess publically through the endpoint(interface ) by hinding a internal implementaion is called api



// and when user make a netowrk  requeses from own applcation to these interface to invoke the corresponding servciess implemented on their proveder applcation 

//is called  API call.




// lakin ye call directly nahi hota hain

//sb se pahle hum http request bhejte hain 
//The request travels over the network
//server http request ko padhta hain 
//fir appropriate function ko call karta hain 
//uske baad server send a response back




// api call hum apne frontend se khud ke backend server pe kar sakte hain ya fir third party website ke server pe kar sakte hain

//api call ke liye hum fetch(),axios() function  ko use karte hain

// api call karte time hume api endpoint(routes or url) ,method,header and body as a  request hum send karte hain




//Example:

fetch("https://generativelanguage.googleapis.com/...", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-goog-api-key": API_KEY
  },
  body: JSON.stringify({
    model: "gemini-2.5-flash",
    contents: "Hello"
  })
}); //api call

//Here your code cannot directly execute the server's code.

Instead:

//here your app useing fetch() fucniton sends an HTTP request.
//The request travels over the network.
//The server receives it.
//The server runs its own function.
//The server sends back a response.


Your App
    |
    | HTTP Request
    v
Server
    |
    └──> getUsers()
             |
             └──> Database
    |
    | HTTP Response
    v


// diffrence

Function Call	                    API Call
Same program	                 Different programs
Same machine (usually)	        Often different machines
Very fast	                   Slower (network involved)
Directly executes code	        Sends a request and waits for a response
add(10,20)	                         fetch("/users")



//-----------------------------------------------------------home wrok------------------------------------------------------------------------

// befnifit of api call()

// type of api design