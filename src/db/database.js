import mysql from 'mysql2'


const options = {
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    host: process.env.HOST_DB,
    database: process.env.NAME_DB
}

export function createClassicConnection(){
    return mysql.createConnection(options).promise()
}

let pool = null;

export function createPoolConnection(){
    if(pool){
        return pool
    }
    pool = mysql.createPool(options).promise()
    return pool
}

