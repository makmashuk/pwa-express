const express = require('express')
var cors = require('cors')
const api_helper = require('./helper')
const app = express()
const port = process.env.PORT || 3000
const apikey  = '668e8a61946f4307b216293b6b4b19cf';
// const apikey  = '20f7cbb365314ec3a4104d0f1f9410ad';

app.use(cors());

app.get('*',(req, res)=>{

  const url = `https://newsapi.org/v2${req.originalUrl}&apiKey=${apikey}`;
  api_helper.make_API_call(url)
  .then(response => {
      res.json(response)
  })
  .catch(error => {
      res.send(error)
  })

})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})