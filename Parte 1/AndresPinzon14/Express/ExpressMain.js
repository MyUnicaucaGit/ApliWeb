const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World from Express!')
})

app.get('/user', (req, res) => {
  res.send('Hello Users!')
})
/* No se suele hacer asi, mucho codigo en una sola linea, es mejor crear una funcion que envie el HTML */
app.get('/admin', (req, res) => {
  res.send('<html><body>Hello Admin!</body></html>')
})

app.get('/adminok', admin)

function admin(req, res) {
  res.send('<html><body>Hello Admin Nodemon!</body></html>')
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})