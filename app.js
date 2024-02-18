const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const db = require('./backend2/queries')
const usercontroller = require('./backend2/controller2/user')
const port = 3000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

// app.get('/users',usercontroller.getAll2)

app.get('/users',async (request,response)=>{

  response.json(await usercontroller.getAll2())

})

app.post('/test',async(request,response)=>{

  // console.log('hi')
  // console.log(request.body.name)

  response.json(await usercontroller.newuser(request.body))
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

