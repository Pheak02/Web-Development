const routes = app => {
    app.use('/api/students', require('./students'))
}

module.exports = routes