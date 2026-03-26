// here we use html content 

const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
        <html>
            <head>
                <title>My Page</title>
            </head>
            <body>
                <h1>Hello Abhishek 👋</h1>
                <p>This is HTML response from server</p>
            </body>
        </html>
    `);
}).listen(9090, () => {
    console.log("Server Started");
});



// here we pass json data

const http = require('http')
// console.log(http);

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'application/json'})

    res.end(JSON.stringify({
        product: "Laptop",
        price: 1200,
        currency: "USD"
    }))
}).listen(9090, ()=>{
    console.log("Server Started");
})


// importing Node’s built-in HTTP module

// ✔ This module allows you to:

// create servers
// handle requests
// send responses



// createServer() creates a new HTTP server.
// It accepts a callback function that runs every time a client sends a request.
// The callback has two parameters:
// request → contains information about the incoming request (URL, method, headers, etc.).
// response → used to send data back to the client.



// writeHead() sends the HTTP status code and response headers. {A response header is metadata sent by a server to a client (browser, Postman, frontend app) as part of an HTTP response.}
// 200 → HTTP status code meaning OK / successful request.
// 'Content-Type':'text/html' tells the browser that the response contains HTML content.


// response.write() sends a chunk of data to the client.
// You can call write() multiple times.
// This does not end the response; it only adds data to it.


// response.end() finishes the response and sends it to the client.
// No more data can be written after this.
// You can optionally pass data inside end() 

// Important
// Once end() is called, the response is complete.