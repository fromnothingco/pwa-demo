const routes = require('next-routes')()


module.exports = routes
.add('dashboard-home', '/dashboard')
.add('dashboard-posts', '/dashboard/:slug')