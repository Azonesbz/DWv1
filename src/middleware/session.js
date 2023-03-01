export function isSessionActive(req, res, next){
    const session = req.session.sessId
    if(!session){
        res.redirect('/')
    }
    next()
}