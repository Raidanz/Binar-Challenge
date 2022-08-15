const express = require('express')
const app = express()
const router = require('./src/router/index')
const path = require('path')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.use(router)
app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
