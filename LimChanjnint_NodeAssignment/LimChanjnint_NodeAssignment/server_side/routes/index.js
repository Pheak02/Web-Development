const routes = app => {
    app.use('/student', require('./student'))
}

module.exports = routes