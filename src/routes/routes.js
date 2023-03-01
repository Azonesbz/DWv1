import express from 'express'
import { loginPage, connectUser, registerPage, createUser, logoutPage, profilPage } from '../controllers/userCtlr.js'
import { createVoyage, voyagePage } from '../controllers/voyageCtrl.js'
import { home } from '../controllers/home.js'
import { uploadFile, storage } from '../controllers/uploadCtrl.js'
import { isSessionActive } from '../middleware/session.js'
import multer from 'multer'




const router = express.Router()

router.get('/', home)

router.get('/login', loginPage)
router.post('/login', connectUser)

router.get('/register', registerPage)
router.post('/register', createUser)

router.get('/logout', logoutPage)

router.post('/create-voyage', createVoyage)
router.get('/create-voyage', voyagePage)
router.get('/profil', isSessionActive, profilPage)

router.post('/upload', multer({ storage: storage }).single('photo'), uploadFile);

export default router