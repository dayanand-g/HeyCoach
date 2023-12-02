const express = require("express");
const cors = require("cors")
const morgan = require("morgan")

const app = express();

var corOptions = {
    origin: 'http://localhost:8081'
}

// middleware  (These are the simple middleware for the purpose of accessing the Json)

//app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

// Routers

const router = require('./Routes/routes.js')
app.use('/api/hotels', router)

// testing api

app.get('/',(req,res) => {
    res.json({message:'hello from api'})
})

const PORT = process.env.PORT || 8080    // for the purpose of production base

// Server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
