import { createPoolConnection } from "./database.js";

export async function createDB(){
    const con = createPoolConnection()

    await con.query('DROP TABLE IF EXISTS users')
    await con.query('DROP TABLE IF EXISTS roles')
    await con.query('DROP TABLE IF EXISTS voyages')

    await con.query(`CREATE TABLE users(
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        pseudo VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        prenom VARCHAR(100),
        nom VARCHAR(100),
        numberphone INT
    )`);
    await con.query(`CREATE TABLE roles(
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        role_id VARCHAR(255) NOT NULL,
        permission VARCHAR(255) NOT NULL
        )`)
    await con.query(`CREATE TABLE voyages(
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        id_user VARCHAR(255) NOT NULL,
        pays_location VARCHAR(255) NOT NULL,
        city_location VARCHAR(255) NOT NULL,
        budget INT NOT NULL,
        description VARCHAR(255) NOT NULL,
        duration INT(255) NOT NULL,
        date DATE NOT NULL
    )`);
}
