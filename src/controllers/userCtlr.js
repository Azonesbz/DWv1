
// Controller de création d'utilisateur

import { connectUserDb, createUserDb, getProfil } from "../repository/userRepository.js";
import { findAllVoyage } from "../repository/voyageRepository.js";
import argon2 from 'argon2'
import fs from 'node:fs'
import jwt from 'jsonwebtoken'

export async function createUser(req, res) {
    const { identify, password, email } = req.body
    const hash = await argon2.hash(password)

    createUserDb(identify, email, hash).then(_ => {
        jwt.sign({identify}, process.env.SECRET_JWT, {expiresIn: '2h'}, (err, token) => {
            if(err) {
                res.status(300).send('Une erreur est survenue, réessayer dans quelques instants.')
            }
            const message = `Bienvenue ${identify} ! Redirection vers la page d'acceuil...`
            res.status(200).send({msg: message, auth: token})
        })
    })
    .catch(err => {
        console.error(err)
        res.send({err: `L\'identifiant existe déjà, veuillez réessayer avec un autre identifiant.`})
    })
};

export async function connectUser(req, res)
{
    const { identify, password } = req.body // Use destructuration to recover the user and password
    if(identify && password){ // If user and password is completed, execute the condition

        connectUserDb(identify)
        .then(user => { // Use function to verify if the user exist in database
            if(argon2.verify(user[0].password, password)){ // Compare the current password with the input password
                jwt.sign({identify}, process.env.SECRET_JWT, {expiresIn: '2h'}, (err, token) => { // Create JWT token for the identifier, with expiration date, and callback
                    if(err) {
                        res.status(300).send('Une erreur est survenue, réessayer dans quelques instants.') // If err, return error 
                    }
                    res.status(200).send({auth: token}) // else return the value of JWT token that we have just created
                })
            }
            const message = 'Le mot de passe est incorrect, veuillez réessayer.'
            res.status(300).send({msg: message})
        })
        .catch(err => {
            console.error(err)
            const message = 'Le nom d\'utilisateur n\'existe pas, veuillez réessayer.'
            res.status(300).send({msg: message})
        })
    } // else, return status 300 and send a message for the front application
    const messagePassword = `Veuillez choisir un mot de passe avant de soumettre le formulaire.`
    const messageIdentify = `Veuillez choisir un identifiant avant de soumettre le formulaire.`
    if(identify === null || undefined) {
        res.status(300).send({messageId: messageIdentify})
    } else if (password === null || undefined) {
    res.status(300).send({messagePass: messagePassword})
    }
};

// Controller for logout page, delete localStorage at deconnexion or if the session have 2hours

export async function logoutPage (req, res) {
    
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
