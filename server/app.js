const express = require('express')
require('./db/mongoose')

const { categoryRouter, receptRouter, ingredientRouter, preparationRouter } = require('./routers')
// const receptRouter = require('./routers/recepts')

// const cors = require('cors')

// const fs = require('fs');
// const http = require('http');
// const https = require('https');
// const privateKey = fs.readFileSync('/home/ronny/certs/myCA2.key', 'utf8');
// const certificate = fs.readFileSync('/usr/local/share/ca-certificates/myCA.crt', 'utf8');

// const credentials = {
//   key: privateKey,
//   cert: certificate
// };



const app = express()
const port = process.env.PORT || 3001

// CORS Headers Middleware
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Auth-Token, X-Requested-With, Content-Type, Accept, Authorization, X-Custom-header,  x-access-token, x-refresh-token, _id');
  // res.setHeader('Access-Control-Allow-Origin', 'https://deneb.traubing.local:3100');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Expose-Headers','x-access-token, x-refresh-token');
  next()
})
// const options = {
//   // origin: 'https://deneb.traubing.local:3100',
//   origin: '*',
//   methods: 'GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE'
//   }
//   // app.use(cors(options))
//   app.use(cors())



app.use(express.json())
app.use(categoryRouter)
app.use(receptRouter)
app.use(ingredientRouter)
app.use(preparationRouter)

app.listen(port, () => {
  console.log('Kochbuch Server is up at port ' + port)
})

// const httpsServer = https.createServer(credentials, app);
// httpsServer.listen(8443);
