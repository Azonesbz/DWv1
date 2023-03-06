
// Controller de création d'utilisateur

import { connectUserDb, createUserDb, getProfil } from "../repository/userRepository.js";
import { findAllVoyage } from "../repository/voyageRepository.js";
import argon2 from 'argon2'
import fs from 'node:fs'
import { v4 as uuidv4 } from 'uuid';

export async function createUser(req, res) {
    const { identify, password, email } = req.body
    if (identify && password && email) {
        const hash = await argon2.hash(password)
        createUserDb(identify, email, hash).then(_ => {
            req.session.sessId = uuidv4()
            console.log(req.session.sessId)
            const message = `Bienvenue ${identify} ! Redirection vers la page d'acceuil...`
            res.send({msg: message})
        })
        .catch(err => {
            console.error(err)
            res.send({err: `L\'identifiant existe déjà, veuillez réessayer avec un autre identifiant.`})
        })
    }
};

export async function connectUser(req, res) 
{
    const { identify, password } = req.body
    if(identify && password){
        connectUserDb(identify).then(user => {
            if(argon2.verify(user[0].password, password)){
                req.session.sessId = uuidv4()
                res.status(200).send({msg: 'Vous êtes connecté'})
            }
            const message = 'Le mot de passe est incorrect, veuillez réessayer.'
            res.status(300).send({msg: message})
        })
        .catch(err => {
            const message = 'Le nom d\'utilisateur n\'existe pas, veuillez réessayer.'
            res.status(300).send({msg: message})
        })
    }
};

// Controller de déconnexion à un utilisateur

export async function logoutPage (req, res) {
    req.session.destroy(err => {
        if(err) throw err
        res.send({msg: 'Déconnexion'})
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
