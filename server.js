import express from 'express'
import ejs from 'ejs'
import path from 'path'
import https from 'https'
import fs from 'node:fs'

import bodyParser from 'body-parser'
import session from 'express-session'
import dotenv from 'dotenv'
import { isAuthentification } from './src/services/session.js'


import route from './src/routes/routes.js'
import { createDB } from './src/db/createDB.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 443
dotenv.config()

const options = {
    key: fs.readFileSync('path/to/private.key'),
    cert: fs.readFileSync('path/to/certificate.crt')
  };
https.createServer(options, app)

app.engine('.html', ejs.__express)
app.set('views', path.join(process.cwd(), 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(express.static('uploads'))
app.use(isAuthentification)
app.use((req, res, next) => {
    res.locals.loader = true;
    next();
});
app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false,
        maxAge: 60 * 60 * 1000
    }
}))
createDB()

app.use(route)



app.listen(port, () => {
    console.log(`Le serveur est ouvert sur le port ${port}`)
})
