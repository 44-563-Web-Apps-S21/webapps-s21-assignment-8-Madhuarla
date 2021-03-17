
const http = require('http')    
                                
const hostname = process.env.hostname || '127.0.0.1'    
const port = process.env.port || 3001               

const server =
  http.createServer(            
    (req,res)=> {               

        var val = ["vehicles","cars","motorbikes","aircrafts","trucks","pickup-trucks"];
var min = 0;

var max = Array.length;
var x=Math.floor(Math.random()*( max-min)+min)
      res.statusCode = 200      
      res.setHeader('Content-Type', 'text/html') 
      res.write('<html> <head> <title> Bonus </title> </head>')
      res.write('<body>')
      res.write(`<p>${val[x]}</p>`)
      res.end('</body></html>') 
    }                           
)
server.listen(port, hostname, () => {   
  console.log(`Server running at http://${hostname}:${port}/`)  
})