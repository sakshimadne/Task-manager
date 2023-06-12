const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
require('./db/connect')

// middleware
app.use(express.json())



// routes
app.get('/hello', (req, res) => {
  res.send('todo app')
})

app.use('/api/v1/tasks', tasks)

const port = 5000
app.listen(port, console.log(`server is listening on port ${port}...`))
