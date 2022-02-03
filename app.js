const express = require('express')
const app = express()

const router = require('./routes/login_route')

app.use('/', router)

app.listen(8080, ()=>{
    console.log('running on 8080')
})