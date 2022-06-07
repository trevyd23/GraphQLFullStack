const express = require('express')
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const colors = require('colors')
const cors = require('cors')
const connectDB = require('./config/db')

const port = process.env.PORT || 5000

const app = express()

try {
    connectDB() 
} catch (error) {
    console.log('Failed to connect to MongoDB', error)
}

app.use(cors())
app.use('/graphql', graphqlHTTP({
schema,
graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, () => console.log(`Listening on port: ${port}`))