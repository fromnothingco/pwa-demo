const express = require('express')
const next = require('next')
const port = process.env.PORT || 3000
const env = process.env.NODE_ENV !== 'production'
const app = next({ env })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use('/sw.js', express.static('static/sw.js'))
  
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})