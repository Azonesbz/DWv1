import { createVoyageDb } from "../repository/voyageRepository.js"

export async function voyagePage(req, res) {
    res.locals.user = 'user'
    res.render('createVoyage.html')
}

export async function createVoyage(req, res){
    const { location, budget, description, duration, date } = req.body
    const id_user = req.session.sessId
    createVoyageDb(id_user, location, budget, description, duration, date)
    .then(voyages => {
        console.log(voyages)
        res.redirect(`/profil`)
    })
    .catch(err => {
        console.log(err + 'pas ok')
    })
}