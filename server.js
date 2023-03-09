import express from 'express'
import ejs from 'ejs'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import route from './src/routes/routes.js'
import { createDB } from './src/db/createDB.js'

const app = express()
const port = process.env.PORT || 4000

app.engine('.html', ejs.__express)
app.set('views', path.join(process.cwd(), 'views'));

const whitelist = ["http://localhost:3000"]
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
app.use(cors(corsOptions))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(route)

createDB()

app.listen(port, () => {
    console.log(`Le serveur est ouvert sur le port ${port}`)
})
