const next = require('next')
// const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = app.getRequestHandler(app)
const express = require('express')



app.prepare().then(() => {
    const server = express()

    // server.get('/robots.txt', (req, res) => (
    //     res.status(200).sendFile('robots.txt', options)
    // ));
    server.use((req,res,next) => {
        global.subdomain = req.hostname.split('.')[0]
        next()
    })  
    server.use(handler).listen(3000)
})