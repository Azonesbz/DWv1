export function isAuthentification(req, res, next){
    res.locals.user = null;
    res.locals.message = null
    res.locals.userImg = null
    res.locals.post = null
    res.locals.userInfo = null
    next()
}