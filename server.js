const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)
const express = require('express')



app.prepare().then(() => {
    const server = express()

    server.use('/sw.js', express.static(__dirname + '/static/sw.js'));
    server.use((req,res,next) => {
        global.subdomain = req.hostname.split('.')[0]
        next()
    })  
    server.use(handler).listen(4000)
})

