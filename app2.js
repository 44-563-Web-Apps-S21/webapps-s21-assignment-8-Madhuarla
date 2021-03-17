const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Tables- nodejs </title> </head>')
      res.write('<body>')
      res.write('<table>  <tr> <td> <th>Location</th> </td> <td>  <th>Number of hours</th> </td> <td><th>Amount of Money</th> </td> </tr>')
      res.write('<tr><td>&nbsp;</td><td>Key West, Florida</td> <td>&nbsp;</td><td>6Hrs</td><td>&nbsp;</td><td>1000$</td></tr>')
      res.write('<tr> <td>&nbsp;</td> <td>Las Vegas, Nevada</td><td>&nbsp;</td><td>2days </td> <td>&nbsp;</td> <td>1500$ </td></tr>')
      res.write(' <tr><td>&nbsp;</td> <td>Disneyland, CL</td> <td>&nbsp;</td> <td>12Hrs</td> <td>&nbsp;</td> <td>500$</td> </tr>')  
      res.write('<tr><td>&nbsp;</td><td>Newyork Times Square</td><td>&nbsp;</td> <td>2Hrs</td> <td>&nbsp;</td> <td>300$</td> </tr></table>')
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})