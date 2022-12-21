const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectdb = require('./config/db')
    
const PORT = process.env.PORT 


connectdb()




const app =express();


app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
    
})

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/assets', require('./routes/assetRoutes'))

app.use(errorHandler)

app.listen(PORT, ()=> {
    console.log('server started')
  });