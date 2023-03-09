
// Controller de création d'utilisateur

import { connectUserDb, createUserDb } from "../repository/userRepository.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// Création d'un compte

export async function createUser(req, res) {
    const { identify, password, email } = req.body
    bcrypt.hash(JSON.stringify(password), 10, (err, hash) => {
        if(err) {
            throw new Error('Erreur lors de la génération de mot de passe.')
        }
        createUserDb(identify, email, hash)
        .then(user => {
            jwt.sign({identify}, process.env.SECRET_JWT, {expiresIn: '2h'}, (err, token) => {
                if(err) {
                    res.status(300).send('Une erreur est survenue, réessayer dans quelques instants.')
                }
                const message = `Bienvenue ${identify} ! Redirection vers la page d'acceuil...`
                res.status(200).send({msg: message, auth: token, user})
            })
        })
        .catch(err => {
            const message = `L\'identifiant existe déjà, veuillez réessayer avec un autre identifiant.`
            res.json({msg: message, err})
        })
    })
};

// Connection à un compte

export async function connectUser(req, res)
{
    const { identify, password } = req.body // Retake the password and identify from the request body with destructuration
    connectUserDb(identify) // Find if the user already exist or not
    .then(user => {
        bcrypt.compare(JSON.stringify(password), user[0].password, (err, passwordValid) => { // Verify if the password in the database match with the password in the request
            if(err){ // if false, then send error message with status 300
                const message = `Le mot de passe est incorrect, veuillez réessayer.`
                res.status(300).json({msg: message})
            }
            if(passwordValid){ // if password valid, give a token to ...
                jwt.sign({identify}, process.env.SECRET_JWT, {expiresIn: '2h'}, (err, token) => {
                    if(err) {
                        res.status(500).send('Une erreur est survenue, réessayer dans quelques instants.')
                    }
                    const message = `Connexion réussi, ravi de vous revoir ${identify} !`
                    res.status(200).json({msg: message, token, status: 200})
                })
            }
        })
    })
    .catch(err => { // If function connectUserDb don't find a user with the same identify, return error
        const message = `Aucun utilisateur n'existe pour ${identify}`
        res.json({msg: message, err})
    })
};

// Gestion du profil (édition, suppression)

export async function profilPage (req, res) {
    
}
