
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
                console.log(err)
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
    connectUserDb(identify)
    .then(async user => {// Use function to verify if the user exist in database
        const verify = await argon2.verify(user[0].password, password)
        console.log(verify)
        if(verify === true){ // Compare the current password with the input password
            
            jwt.sign({identify}, process.env.SECRET_JWT, {expiresIn: '2h'}, (err, token) => { // Create JWT token for the identifier, with expiration date, and callback
                if(err) {
                    console.log('erreur')
                    return res.status(300).send('Une erreur est survenue, réessayer dans quelques instants.') // If err, return error 
                }
                console.log('ok')
                return res.status(200).send({auth: token}) // else return the value of JWT token that we have just created
            })
        } else {
            const message = 'Le mot de passe est incorrect, veuillez réessayer.'
            res.status(300).send({msg: message})
        }
    })
    .catch(err => {
        console.error(err)
        const message = 'Le nom d\'utilisateur n\'existe pas, veuillez réessayer.'
        res.status(404).send({msg: message})
    })
};

export async function profilPage (req, res) {
    return getProfil()
}
