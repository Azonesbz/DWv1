import getCountry from "../../public/js/addCountry.js"


export async function home(req, res) {
    const user = req.session.sessId
    const country = getCountry()
    console.log(req.session.sessId)
    res.locals.country = country
    res.render('home.html')
}