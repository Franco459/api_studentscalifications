const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 3000;

app.use(express.json());

app.listen(3000, () => console.log("works!"))

app.get('/', (req, res) => res.send('Hello World!'))
/*app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const http = require('http');



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/