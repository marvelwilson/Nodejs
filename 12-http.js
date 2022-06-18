const http = require('http')

const server = http.createServer((req, res)=>{
    if (req.url === '/') {
     res.end('welcome to out home page')
    }
  if (req.url === '/about') {
   res.end('Here is our short history')
  }  
  res.end(`
   <h1>Oops!</h1>
   <p>We Can't seem to find the page you are looking for</p>
   <a href='/'>Back to home</a>
  `)
})

server.listen(5000)