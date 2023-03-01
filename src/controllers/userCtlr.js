
// Controller de création d'utilisateur

import { connectUserDb, createUserDb, getProfil } from "../repository/userRepository.js";
import { findAllVoyage } from "../repository/voyageRepository.js";
import argon2 from 'argon2'
import fs from 'node:fs'
import { v4 as uuidv4 } from 'uuid';

let message;

export async function registerPage(req, res) {
    const user = req.session.sessId
    res.locals.user = user
    res.render('register.html');
};

export async function createUser(req, res) {
    const user = req.session.sessId
    const { username, password, email } = req.body
    if (username && password && email) {
        if(password.length < 5){
            const message = 'Le mot de passe doit contenir 5 caractères au minimum'
            res.render('register', {message})
        }
        const hash = await argon2.hash(password);
        await createUserDb(username, email, hash)
        .then(user => {
            if(user === null){
                message = 'Cet utilisateur existe déjà, veuillez en choisir un autre'
                res.status(500).render('register.html', {message})
            }
            req.session.sessId = uuidv4()
            res.status(200).redirect('/')
        })
        .catch(err => {
            message = 'Une erreur est survenue, veuillez réessayer plus tard.'
            console.error(err)
            res.status(404).render('register.html', {message})
        })
    } else {
        const message = `Veuillez remplir tout les champs avant de soumettre le formulaire`
        res.status(400).render('register.html', {message})
    }
   
};

// Controller de connexion à un utilisateur
export async function loginPage(req, res) 
{
    const user = req.session.sessId
    res.render('login.html');
};

// Middleware de connexion

export async function connectUser(req, res) 
{
    const { username, password } = req.body
    if(username && password){
        connectUserDb(username).then(user => {
            if(argon2.verify(user[0].password, password)){
                req.session.sessId = uuidv4()
                res.status(200).redirect('/')
            }
            message = 'Le mot de passe est incorrect, veuillez réessayer.'
            res.status(300).render('login.html', {message})
        })
        .catch(err => {
            console.error(err)
            message = 'Le nom d\'utilisateur n\'existe pas, veuillez réessayer.'
            res.status(300).render('login.html', {message})
        })
    }
    res.locals.user = username
};

// Controller de déconnexion à un utilisateur

export async function logoutPage (req, res) {
    const user = req.session.sessId
    res.locals.user = user
    req.session.destroy(err => {
        if(err) throw err
        res.redirect('/')
    })
}

export async function profilPage (req, res) {
    const user = req.session.sessId

    if(fs.existsSync(`./uploads/${user}.jpg`)){
        let userImg = `./${user}.jpg`
        res.locals.userImg = userImg
    } else {
        let userImg = `./user.png`
        res.locals.userImg = userImg
    }


    await getProfil(user).then(userInfo => {
        console.log(userInfo)
        res.locals.userInfo = userInfo[0]
    })
    findAllVoyage().then(voyages => {
        res.render('profil.html', {voyages})
    })
    .catch(err => {
        console.log(err)
        const message = 'Aucun voyage pour le moment'
        res.render('profil.html', {message})
    })
}
