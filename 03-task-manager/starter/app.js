const express = require('express');
const { route } = require('./routes/tasks');
const app = express()
const tasks = require('./routes/tasks')


//middleware

app.use(express.json())



// routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})
app.use('/api/v1/tasks', tasks)
// console.log('Task Manager App')
const port = 3000
app.listen(port, console.log(`Server is listening on port ${port}`));