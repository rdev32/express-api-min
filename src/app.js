import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'

const app = express()

// config
app.set('port', 3000)

// middleware
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../../client/build')))

// routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'))
})


export default app