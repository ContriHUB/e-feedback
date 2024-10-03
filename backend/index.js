const connectToMongo = require('./db');

connectToMongo();

const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000', // Specify the allowed origin
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));
const port =5000

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () =>{
    console.log(`e-feedback listening app listening at http://localhost:${port}`)
})