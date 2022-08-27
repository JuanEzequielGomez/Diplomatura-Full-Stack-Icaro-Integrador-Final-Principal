const express = require('express')
const app = express()
// require('dotenv').config()
const PORT = 3000
const apiRoutes = require('./routes/apiRoutes')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.use(require('cors')())

// app.set('view engine', 'ejs')
// app.set('views', './src/views')

app.get('/', (req, res) => res.redirect('/'))
app.use('/api', apiRoutes)

app.listen(PORT, () =>
  console.log(`server running on port ${PORT}`)
)
