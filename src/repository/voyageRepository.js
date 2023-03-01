
import { createPoolConnection } from "../db/database.js";

export async function createVoyageDb(id_user, location, budget, description, duration, date){
    await createPoolConnection().query(`INSERT INTO voyages (id_user, location, budget, description, duration, date) VALUES ( ?, ?, ?, ?, ?, ?)`, [id_user, location, budget, description, duration, date])
    const voyage = {
        location,
        budget,
        description,
        duration,
        date
    }
   
    return voyage
}
export async function findAllVoyage(){
    const [rows] = await createPoolConnection().query(`SELECT * FROM voyages`)
    if(rows.length === 0){
        return null
    }
    return rows
}