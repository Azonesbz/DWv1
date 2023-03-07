import express from 'express'
import ejs from 'ejs'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import { isAuthentification } from './src/services/session.js'
import route from './src/routes/routes.js'
import { createDB } from './src/db/createDB.js'

const app = express()
const port = process.env.PORT || 4000

const whitelist = ["http://localhost:3001"]
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
}

app.engine('.html', ejs.__express)
app.set('views', path.join(process.cwd(), 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(express.static('uploads'))
app.use(cors())
app.use(isAuthentification)
app.use(route)

createDB()

app.listen(port, () => {
    console.log(`Le serveur est ouvert sur le port ${port}`)
})
