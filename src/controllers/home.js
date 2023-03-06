export async function home(req, res) {
    console.log(req.session.sessid)
    res.send({name: 'Vincent'})
}