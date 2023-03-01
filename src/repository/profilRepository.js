import { createPoolConnection } from "../db/database";

export async function findProfil(id_user, choiseCountry, budget, description, duration, choiseDate){
    const [rows] = await createPoolConnection().query(`SELECT * FROM voyage WHERE id_voyage = ?`, [id_user])
    if(rows.length <= 0){
        return null
    }
    await createPoolConnection().query(`INSERT INTO voyage (choiseCountry, budget, description, duration, choiseDate)`, [choiseCountry, budget, description, duration, choiseDate])
}