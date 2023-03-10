import { createPoolConnection } from "../db/database.js";


export async function createUserDb(username, email, password) {
    const [users] = await createPoolConnection().query(`SELECT * FROM users WHERE pseudo = ?`, [username])
    if(users.length > 0) {
        throw new Error('Cet identifiant existe déjà, veuillez réessayer.')
    }
    const [info] = await createPoolConnection().query(`INSERT INTO users (pseudo, email, password) VALUES (?, ?, ?)`, [username, email, password])

    return {id: info.insertId, username, email, password}
}

export async function connectUserDb(username){
    const [rows] = await createPoolConnection().query(`SELECT * FROM users WHERE pseudo = ?`, [username])
    if(rows.length === 0) {
        return new Error('Aucun utilisateur n\'a été trouvé')
    }
    return rows
}

export async function getProfil(username){
    const [info] = await createPoolConnection().query(`SELECT * FROM users WHERE pseudo = ?`, [username])
    return info
}
